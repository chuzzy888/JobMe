import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import lgb from "../assets/images/login.png";
import gg from "../assets/images/gg.png";
import fb from "../assets/images/fb.png";
import lnk from "../assets/images/lnk.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${lgb})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md md:mx-0 mx-5">
        <h2 className="text-2xl font-bold text-center text-zinc-800">
          Welcome back!
        </h2>
        <p className="text-center text-zinc-600 mb-6">
          Log In to hit your dream job!
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-zinc-700" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-zinc-300 rounded-xl"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
            Log In
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
          Don't have an account?{" "}
          <a href="/register" className="txtb hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
