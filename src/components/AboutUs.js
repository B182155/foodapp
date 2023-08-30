import React from "react";
import image from "../assets/img/burger-image.png";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className=" sm:grid-cols-2 grid grid-cols-1 place-items-center gap-10 w-[80%] h-[82vh] mx-auto my-0">
      <div className="flex flex-col gap-4 justify-center">
        <p className="font-semibold text-xl text-gray-700">
          Discover Your Yummy Food
        </p>
        <h1 className="text-6xl  font-bold  text-gray-800 ">
          <p className="mb-5"> All we need is</p>
          <span className="bg-orange-400 rounded-md p-2 text-white">
            Yummy Food
          </span>
        </h1>
        <p className="text-2xl font-mono font-semibold italic text-gray-700">
          "Elevate your dining experience with our app - where convenience meets
          culinary delight".
        </p>

        <button className="text-xl w-[40%] bg-slate-200 p-3 rounded-md font-semibold">
          <Link to="/">Explore Restaurants</Link>
        </button>
      </div>
      <div className="hidden sm:block">
        <img src={image} />
      </div>
    </div>
  );
};

export default AboutUs;
