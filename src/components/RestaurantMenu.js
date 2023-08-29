import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import { useRestaurant } from "../utils/useRestaurant";
import MenuShimmer from "./MenuShimmer";
import MenuItems from "./MenuItems";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantinfo, cards] = useRestaurant(id);

  return restaurantinfo === null ? (
    <MenuShimmer />
  ) : (
    <div className="rounded-xl p-2 ml-40 mr-40">
      <div className="bg-gray-500 shadow-md rounded-xl grid grid-cols-2 gap-x-8 gap-y-2 items-center">
        <div className="p-4 my-0 mx-auto">
          <img
            className="h-64 w-64 object-center  rounded-xl w-30"
            src={IMG_URL + restaurantinfo?.cloudinaryImageId}
          />
        </div>
        <div className="m-0">
          <h1 className="text-3xl text-white  underline font-mono font-extrabold mb-5">
            {restaurantinfo?.name}
          </h1>
          <h2 className="mb-2 text-lg font-mono font-semibold text-white ">
            {restaurantinfo?.areaName}
          </h2>
          <h3 className="mb-2 text-md font-mono font-semibold text-white">
            {restaurantinfo?.cuisines.join(",")}
          </h3>
          <div className="flex gap-6">
            <button className="mb-1 text-md font-mono font-semibold text-white">
              {"⭐" + restaurantinfo?.avgRating}
            </button>
            <h1 className="mb-1 text-md font-mono font-semibold text-white">
              {restaurantinfo?.sla?.slaString}
            </h1>
            <h1 className="mb-1 text-md font-mono font-semibold text-white">
              {restaurantinfo?.costForTwoMessage}
            </h1>
          </div>
        </div>
      </div>
      <div>
        {cards.map((cd, index) => {
          const card = cd?.card?.card || cd?.card?.card?.categories[0];
          return <MenuItems key={index} card={card} />;
        })}
      </div>
    </div>
  );
};
