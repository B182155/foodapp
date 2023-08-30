import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import { useSelector } from "react-redux";

import UserContext from "../utils/userContext";
import searchContext from "../utils/searchContext";
import { LatLng } from "../utils/LatLng";

import store from "../utils/store";
import { useEffect } from "react";
import LoggedInfo from "../utils/loggedinfo";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Title = () => {
  return <img className="h-20 rounded-lg" alt="logo" src={Logo} />;
};

const Header = () => {
  // const [isloggedin, setislogged] = useState(false);
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);
  const { isloggedin, setisloggedin } = useContext(LoggedInfo);
  const { searchedfor, setsearchedfor } = useContext(searchContext);
  const [val, setvalue] = useState("location");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-50  shadow-xl">
      <Title />
      <div className="search-container bg-pink-50 ">
        <div className="w-full mx-auto p-2 rounded-md">
          <div className="flex justify-between rounded-md border-[3px] border-gray-300">
            <input
              type="text"
              className="search-input p-2 w-full rounded-s-md"
              placeholder={val}
              // value={val}
              onChange={(e) => setvalue(e.target.value)}
            />
            <button
              className="search-btn bg-blue-200  p-1 border-solid rounded-e-md hover:bg-teal-600"
              onClick={() => {
                if (val === "") {
                  setvalue(searchedfor);
                  setsearchedfor(searchedfor);
                } else {
                  setsearchedfor(val);
                }

                console.log(val);
                // setvalue("hyderabad");
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <div>
        <div className="nav-items">
          <ul className="flex py-6">
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/aboutus">About Us</Link>
            </li>

            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/cart">
                <ShoppingCartCheckoutIcon />
                -[{cartItems.length}]
              </Link>
            </li>
            {/* <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/instamart">Instamart</Link>
            </li> */}
            <div>
              {isloggedin ? (
                <div className="flex flex-wrap gap-1">
                  <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
                    <Link>
                      <button
                        className=""
                        onClick={() => {
                          setisloggedin(false);
                          setUser({
                            user: {
                              name: "",
                              email: "",
                            },
                          });
                          setTimeout(() => {
                            console.log(user);
                          }, 1);
                        }}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                  <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
                    <h2>{`Hi! ${user.name}`}</h2>
                    {/* <h2>{user.name}</h2> */}
                  </li>
                </div>
              ) : (
                <div className="flex flex-wrap gap-1">
                  <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
                    <Link to="/register">Register</Link>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
