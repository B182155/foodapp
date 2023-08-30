import React from "react";
import { IMG_URL } from "../constants";

const Restaurantcard = ({
  name,
  cuisines,
  cloudinaryImageId,
  aggregatedDiscountInfoV3,
  badgesV2,
  avgRating,
  sla,
}) => {
  const { header, subHeader } = { ...aggregatedDiscountInfoV3 };
  console.log(header, subHeader);
  const rating = avgRating > 4 ? "bg-green-300" : "bg-red-400 text-gray-50 ";
  return (
    // <div className="h-full w-full p-2  m-3 shadow-lg bg-pink-50">
    <div className="flex flex-col flex-grow p-2 gap-3">
      <div className="w-full h-60 relative">
        <img
          alt={name}
          src={IMG_URL + cloudinaryImageId}
          className="w-full h-full object-center object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-b-xl"></div>
        {header ? (
          <h1 className="absolute z-10 text-[20px] text-white font-extrabold bottom-2 left-3">
            {header + " " + subHeader}
          </h1>
        ) : (
          <></>
        )}
      </div>
      <div
        className="flex flex-col
       gap-1"
      >
        <h3 className="text-xl font-bold truncate pl-2">{name}</h3>
        <div className="flex gap-12 pl-2">
          <button className={`${rating}  p-1 rounded-md`}>
            {"⭐" + avgRating}
          </button>
          <h1>{sla.slaString}</h1>
        </div>
        <h5 className="text-sm font-mono font-extralight pl-2">
          {cuisines.join(", ")}
        </h5>
      </div>
    </div>
  );
};

export default Restaurantcard;
