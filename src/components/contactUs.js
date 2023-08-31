import React from "react";

import contactImg from "../assets/img/contact.jpg";

export default function Contact() {
  return (
    <div className="sm:grid-cols-2 grid grid-cols-1 place-items-center gap-10 w-[80%] min-h-[82vh] mx-auto my-0">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-scale-down"
          src={contactImg}
          alt="contactImg"
        />
      </div>

      <div className="flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg  p-8 px-8">
          <h2 className="text-4xl  font-bold text-center">CONTACT US</h2>
          <div className="flex flex-col text-gray-700">
            <input
              className="rounded-lg mt-4 p-2 bg-gray-300 focus:border-blue-500 focus:outline-blue-500"
              type="text"
              placeholder="name"
            />
            <input
              className="rounded-lg mt-4 p-2 bg-gray-300 focus:border-blue-500 focus:outline-blue-500"
              type="email"
              placeholder="email"
            />
            <input
              className="rounded-lg mt-4 p-2 bg-gray-300 focus:border-blue-500 focus:outline-blue-500"
              type="text"
              placeholder="Type message"
            />
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
