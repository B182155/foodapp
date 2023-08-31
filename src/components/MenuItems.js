import React, { useState } from "react";

import { MenuItem } from "./MenuItem";
import MenuShimmer from "./MenuShimmer";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";

export default MenuItems = ({ card }) => {
  const [btn, setBtn] = useState(false);

  return card?.itemCards?.length === 0 ? (
    <MenuShimmer />
  ) : (
    <>
      {card?.itemCards?.length ? (
        <div className="flex justify-between border-b-2 border-solid border-b-slate-500  bg-blue-50 shadow-md rounded-md ">
          <h1 className="ml-28 text-2xl font-bold font-mono p-3">
            {card?.title}
            {card?.itemCards?.length ? ` [${card?.itemCards?.length}]` : ""}
          </h1>

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
          {card?.itemCards?.map((it) => {
            return (
              <li key={it?.card?.info?.id} className="hover:outline-slate-400">
                <MenuItem itemInfo={it?.card?.info} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
