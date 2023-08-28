const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-8 justify-between">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e, index) => {
        return (
          <div
            className="h-52 w-52 m-2 bg-gray-400 rounded-lg"
            key={index}
          ></div>
        );
      })}
      {/* {}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>}
      {<div className="h-52 w-52 m-2 bg-gray-400"></div>} */}
    </div>
  );
};

export default Shimmer;
