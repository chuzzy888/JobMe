import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import lgb from "../assets/images/rg.png";
import gg from "../assets/images/gg.png";
import fb from "../assets/images/fb.png";
import lnk from "../assets/images/lnk.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${lgb})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full md:px-20 max-w-xl my-2 md:mx-0 mx-5">
        <h2 className="text-xl font-bold text-center text-zinc-800">
          Sign Up!
        </h2>
        <p className="text-center text-zinc-600 mb-6">
          Register to hit your dream job!
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl"
              type="text"
              placeholder="First name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl mb-4"
              type="text"
              placeholder="Last name"
              required
            />
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl mb-4"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl mb-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl mb-4"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
            <div className="flex justify-between items-center m-1 mt-5">
              <div className="flex items-center ">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-zinc-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm txtb hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="bgb text-[#FFFFFF] hover:bg-primary/80 w-full p-2 rounded-lg">
            Sign Up
          </button>
        </form>
        <p className="text-center text-zinc-600 mt-4">Or continue with</p>
        <div className="flex justify-center mt-2 gap-3">
          <button>
            <img src={fb} alt="Facebook" className="w-4 h-4" />
          </button>
          <button>
            <img src={gg} alt="Google" className="w-6 h-6" />
          </button>
          <button>
            <img src={lnk} alt="LinkedIn" className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-zinc-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="txtb hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
