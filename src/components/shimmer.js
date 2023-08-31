const Shimmer = () => {
  return (
    <div className="grid grid-cols-4  gap-8 justify-between mx-auto my-0 w-[80%]">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((e, index) => {
        return (
          <div
            className="h-52 w-52 m-2 bg-gray-400 rounded-lg"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Shimmer;
