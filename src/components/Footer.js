import { useContext } from "react";
import UserContext from "../utils/userContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-2 my-4 bg-pink-50 text-center shadow-lg shadow-pink-100">
      <h3 className="text-md font-sans font-semibold">
        This site is developed by SAS
      </h3>
    </div>
  );
};
export default Footer;
