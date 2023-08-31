import React, { useState } from "react";

import { MenuItem } from "./MenuItem";
import MenuShimmer from "./MenuShimmer";

import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import arrowIcon from "../assets/img/arrowhead-pointing-up-inside-a-square-box-outline.png";

export default UserTransactions = ({ card }) => {
  const [btn, setBtn] = useState(true);

  const { cartitems, date } = { ...card };

  return cartitems?.length === 0 ? (
    <MenuShimmer />
  ) : (
    <>
      {cartitems?.length ? (
        <div className="flex justify-between border-b-2 border-solid border-b-slate-500  bg-blue-50 shadow-md rounded-md ">
          <div className="w-[30%] mx-auto my-0">
            <div className="flex justify-between text-slate-800 my-2">
              <div className="font-semibold">Ordered on</div>
              <div className="font-semibold text-gray-700">
                {/* <CurrencyRupeeIcon className="scale-90 text-slate-800" /> */}
                {date.slice(0, 10)}
              </div>
            </div>

            <ul className="ml-5 mb-2">
              {cartitems.map((item) => {
                return (
                  <li className="flex">
                    <span className="mr-2 scale-75">
                      <img src={arrowIcon} />
                    </span>
                    {item.count} <CloseIcon className="scale-75" />{" "}
                    <span className="font-semibold text-zinc-950 truncate">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-2" />
            <div className="flex justify-between text-slate-800 mb-2">
              <div>Item total</div>
              <div>
                <CurrencyRupeeIcon className="scale-90 text-slate-800" />
                {card.totalAmount + " /-"}
              </div>
            </div>
          </div>

          <div className="mr-28 my-auto mx-0">
            {btn ? (
              <button
                className="rounded-md p-1"
                onClick={() => {
                  setBtn(false);
                }}
              >
                {<KeyboardArrowDownTwoToneIcon />}
              </button>
            ) : (
              <button
                className="rounded-md p-1"
                onClick={() => {
                  setBtn(true);
                }}
              >
                {<KeyboardArrowUpTwoToneIcon />}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {btn ? (
        <div></div>
      ) : (
        <ul>
          {card?.cartitems?.map((it) => {
            return (
              <li key={it?.id} className="hover:outline-slate-400">
                <MenuItem itemInfo={it} AddItemPart={true} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
