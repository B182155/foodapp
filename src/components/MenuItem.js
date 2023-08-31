import React, { useState } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { MENU_ITEM } from "../constants";

export const MenuItem = ({ itemInfo, AddItemPart = false }) => {
  const { name, description, price, imageId, defaultPrice, category } =
    itemInfo;

  const actual_price = price || defaultPrice;
  // console.log(itemInfo);

  //Adding count variable to itemInfo
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
    <div className="flex justify-between border-b-2 border-solid border-b-slate-500 bg-pink-50 shadow-md rounded-md ">
      <div className="ml-24  w-8/12 p-3">
        <h1 className="text-xl  font-bold ">{name}</h1>
        <h2 className="text-sm  font-bold mb-2">
          {actual_price ? "Rs-" + actual_price / 100 + "/-" : ""}
        </h2>
        <h4 className="text-sm  font-extralight">{description || category}</h4>
      </div>
      <div className="mr-20 my-1">
        <img
          className="h-20 w-20 text-sm font-mono font-medium rounded-md mb-2"
          src={
            imageId
              ? MENU_ITEM + imageId
              : `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dlzurcsthx1y82cudnol`
          }
          // src="../assets/img/food.jpg"
          // alt={name + " image"}
        />

        {!AddItemPart ? (
          count === 0 ? (
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
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
