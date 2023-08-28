import React, { useState } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const MenuItem = ({ itemInfo }) => {
  const { name, description, price, imageId } = itemInfo;
  // console.log(itemInfo);
  const ct = itemInfo.count ?? 0;
  const [count, setCount] = useState(ct);

  const dispatch = useDispatch();

  const addFoodItem = (itemInfo, count) => {
    itemInfo.count = count;
    setCount(count);

    dispatch(addItem(itemInfo));
  };

  const removeFoodItem = (itemInfo, count) => {
    itemInfo.count = count;
    setCount(count);

    dispatch(removeItem(itemInfo));
  };

  return (
    // <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-pink-50">
    <div className="flex justify-between border-b-2 border-solid border-b-slate-500 bg-pink-50 shadow-md rounded-md ">
      <div className="ml-28 flex flex-col justify-center w-8/12 p-3">
        <h1 className="text-xl font-mono font-bold ">{name}</h1>
        <h2 className="text-sm font-mono font-bold mb-2">
          {price ? "Rs-" + price / 100 + "/-" : ""}
        </h2>
        <h4 className="text-sm font-mono font-extralight">{description}</h4>
      </div>
      <div className="mr-20 flex flex-col justify-center my-1">
        <img
          className="h-20 w-20 text-sm font-mono font-medium rounded-md mb-2"
          alt={name + " image"}
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            imageId
          }
        />

        {count === 0 ? (
          <div className="flex">
            <button
              className="flex-grow bg-blue-100 rounded-md "
              onClick={() => {
                addFoodItem(itemInfo, count + 1);
              }}
            >
              AddItem
            </button>
          </div>
        ) : (
          <div className="flex rounded-md bg-slate-50 text-green-800 shadow-md shadow-teal-400 border-green-500">
            <button
              className="flex-grow"
              onClick={() => {
                removeFoodItem(itemInfo, count - 1);
              }}
            >
              -
            </button>
            <span className="text-center flex-grow ">{count}</span>
            <button
              className="flex-grow"
              onClick={() => {
                addFoodItem(itemInfo, count + 1);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};