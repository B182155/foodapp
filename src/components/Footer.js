import { useContext } from "react";
import UserContext from "../utils/userContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-5 bg-pink-50 text-center shadow-lg shadow-pink-100">
      <h3 className=" font-sans font-semibold">
        <span className="text-gray-700 ">Created By</span>
        {"🚀"}
        <span className="text-blue-950 ml-1 text-xl ">SAS TEAM </span>
        {" ©️ 2023 "}
        <span className="text-zinc-950 ml-1">FOOD</span>
        <span className="text-orange-800">VILLA</span>
      </h3>
    </div>
  );
};
export default Footer;
