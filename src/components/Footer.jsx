import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import ig from "../assets/images/ig.png";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="border-b border-t border-black p-4 md:p-10 m-1">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <img src={logo} alt="jobme" className="w-24" />
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#" className="text-foreground">
              Find Jobs
            </a>
            <a href="#" className="text-foreground">
              Post a Job
            </a>
            <a href="#" className="text-foreground">
              Contact Us
            </a>
            <a href="#" className="text-foreground">
              Log In
            </a>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">Find Us On:</span>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-blue-600" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-blue-500" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={ig} alt="" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="X">
              <RiTwitterXLine className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
