import React, { useState } from "react";

import { MenuItem } from "./MenuItem";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";

export default MenuItems = ({ card }) => {
  const [btn, setBtn] = useState(false);

  return (
    <>
      {card?.itemCards?.length ? (
        <div className="flex justify-between border-b-2 border-solid border-b-slate-500  bg-blue-50 shadow-md rounded-md ">
          <h1 className="ml-28 text-2xl font-extrabold font-mono p-3">
            {card?.title}
            {card?.itemCards?.length ? `(${card?.itemCards?.length})` : "shiva"}
          </h1>

          <div className="mr-28">
            {btn ? (
              <button
                className="rounded-md p-1"
                onClick={() => {
                  setBtn(false);
                }}
              >
                {<ArrowCircleDownTwoToneIcon />}
              </button>
            ) : (
              <button
                className="rounded-md p-1"
                onClick={() => {
                  setBtn(true);
                }}
              >
                {<ArrowCircleUpTwoToneIcon />}
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
