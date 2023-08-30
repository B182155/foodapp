import React from "react";
import image from "../assets/img/aboutus.jpg";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="bg-center relative">
      <img
        src={image}
        className="h-[100vh] w-[100%] object-center absolute -z-10 mx-auto my-0"
      />
      <div className="pt-40 w-[60%]">
        <div className="flex flex-col gap-4 justify-center h-[80vh] w-[70%] mx-auto">
          <p className="font-semibold text-xl text-white">
            Discover Your Yummy Food
          </p>
          <p className="text-6xl font-bold font-serif text-cyan-300">
            All we need is Yummy Food
          </p>
          <p className="text-2xl font-mono font-semibold text-white">
            Elevate your dining experience with our app - where convenience
            meets culinary delight.
          </p>

          <div className="text-2xl absolute left-[70%] bg-slate-200 p-3 rounded-md font-semibold">
            <Link to="/">Explore Restaurants</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
