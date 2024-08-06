import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar */}
      <header className="bg-white shadow-md p-5 ">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="jobme" className="w-24" />
            </Link>
          </div>
          <div className="space-x-4 md:block hidden">
            <Link to={"/"} className="txtb hover:text-blue-400">
              Home
            </Link>

            <Link to={"/jobs"} className="text-zinc-700 hover:text-zinc-900">
              Job Listings
            </Link>
            <Link className="text-zinc-700 hover:text-zinc-900" to={"/contact"}>
              {" "}
              Contact Us
            </Link>
          </div>
          <div className="space-x-4 md:block hidden">
            <a href="#" className="bgb text-white px-4 py-2 rounded-xl ">
              Post Jobs
            </a>

            {user ? (
              <button
                onClick={handleLogout}
                className="text-zinc-700 hover:text-zinc-900"
              >
                <span className="flex items-center gap-2">
                  {" "}
                  <FiLogOut />
                  Log out
                </span>
              </button>
            ) : (
              <Link className="text-zinc-700 hover:text-zinc-900" to={"/login"}>
                {" "}
                Log In
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            <button
              className="text-gray-600 text-5xl focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white w-64 h-72 shadow-lg z-40 lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            to={"/"}
            className="block text-gray-600 hover:text-blue-600 mb-4"
          >
            Home
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-zinc-700 hover:text-zinc-900 mb-4"
            >
              <span className="flex items-center gap-2">
                {" "}
                <FiLogOut />
                Log out
              </span>
            </button>
          ) : (
            <Link className=" hover:text-zinc-900 mb-4 txtb" to={"/login"}>
              {" "}
              Log In
            </Link>
          )}
          <Link
            to={"jobs"}
            className="block text-gray-600 hover:text-blue-600 mb-4"
          >
            Job Listing
          </Link>
          <Link
            to={"contact"}
            className="block text-gray-600 hover:text-blue-600 mb-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
