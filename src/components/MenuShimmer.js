import React from "react";

export const MenuShimmer = () => {
  return (
    <div className="bg-blue-50 p-2 ml-40 mr-40 w-100">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e, index) => {
        return (
          <div
            className="relative h-32 w-68 shadow-md rounded-md bg-gray-250 border-b-2 border-solid border-b-slate-500 "
            key={index}
          ></div>
        );
      })}

      {/* <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div>
      <div className="relative h-32 w-68 shadow-md m-1 p-1 bg-gray-250"></div> */}
    </div>
  );
};

export default MenuShimmer;
