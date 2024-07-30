import React from "react";
import cs from "../assets/images/css.png";
import phc from "../assets/images/phc.png";
import lct from "../assets/images/lct.png";
import eml from "../assets/images/eml.png";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center bg-gray-100 p-8">
        {/* Header Section */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={cs} alt="Header" className="w-full h-48 object-cover" />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 max-w-3xl bg-[#DBF7FD] rounded-lg shadow-lg md:-mt-8 mt-8 p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone number*"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              placeholder="Message*"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bgb text-white rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full max-w-3xl grid md:grid-cols-3 place-content-center place-items-center grid-cols-1 gap-10 mt-8 ">
          <div className="w-full max-w-xs bg-white rounded-lg shd p-6 text-center">
            <div className="text-2xl  flex justify-center items-center text-blue-500 mb-2">
              <img src={phc} alt="" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium">Call Us</h3>
            <p className="text-[#000000] text-sm">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="txtb">+44 567 890 259</p>
          </div>
          <div className="w-full max-w-xs bg-white rounded-lg shd p-6 text-center ">
            <div className="text-2xl  flex justify-center items-center text-blue-500 mb-2">
              <img src={eml} alt="" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium">Email Us</h3>
            <p className="text-[#000000] text-sm">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="txtb">Comando22@gmail.com</p>
          </div>
          <div className="w-full max-w-xs bg-white rounded-lg shd p-6 text-center">
            <div className="text-2xl flex justify-center items-center text-blue-500 mb-2">
              <img src={lct} alt="" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium">Location</h3>
            <p className="text-[#000000] text-sm">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="txtb">23 Shinghai Street, Lagos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
