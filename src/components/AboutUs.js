import React from "react";
import image from "../assets/img/images.jpg";

export const AboutUs = () => {
  return (
    <div className="flex justify-center gap-10 content-center bg-blue-50">
      <img src={image} className="inline-block ml-40" />
      <div className=" flex flex-col gap-3 justify-center">
        <p className="text-3xl font-mono font-bold">
          We deliver the delicious food items at your door with high quality and
          at affordable prices.
        </p>
        <p className="text-2xl font-mono font-semibold">
          Customers can use our platform to search and discover restaurants
          nearby them and can order food items that they wish.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
