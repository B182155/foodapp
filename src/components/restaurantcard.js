import React from "react";
import { IMG_URL } from "../constants";

const Restaurantcard = ({
  name,
  cuisines,
  cloudinaryImageId,
  badgesV2,
  avgRating,
  sla,
  costForTwo,
}) => {
  return (
    // <div className="h-full w-full p-2  m-3 shadow-lg bg-pink-50">
    <div className="flex flex-col flex-grow p-2 ">
      <img
        alt={name}
        src={IMG_URL + cloudinaryImageId}
        className="w-full h-60 mb-2 object-center object-cover rounded-xl"
      />
      <h3 className="text-xl font-mono font-bold pl-1">{name}</h3>
      <h5 className="text-sm font-mono font-extralight pl-1">
        {cuisines.join(", ")}
      </h5>
      <div className="flex justify-between">
        <button>{"⭐" + avgRating}</button>
        <h1>{sla.slaString}</h1>
        <h1>{costForTwo}</h1>
      </div>
    </div>
  );
};

export default Restaurantcard;
