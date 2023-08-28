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

const Title = () => {
  return <img className="h-24 rounded-lg" alt="logo" src={Logo} />;
};

const Header = () => {
  const [isloggedin, setislogged] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const { coords } = useContext(LatLng);
  const { searchedfor, setsearchedfor } = useContext(searchContext);
  const [val, setvalue] = useState("location");

  // const [searchInput, setsearchInput] = useState("search location");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mb-2 flex justify-between items-center bg-pink-50  shadow-xl ">
      <Title />
      <div className="search-container bg-pink-50 align-middle ">
        <input
          type="text"
          className="search-input rounded-md p-1 pl-2 mr-5"
          placeholder={val}
          // value={val}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button
          className="search-btn bg-blue-200 p-1 pl-2 rounded-md"
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

      <h1 className="py-10">{isOnline ? "🟢" : "🔴"}</h1>
      <div>
        <div className="nav-items">
          <ul className="flex py-10">
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/aboutus">About Us</Link>
            </li>
            {/* <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/about">About</Link>
            </li> */}
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/cart">Cart-{cartItems.length}</Link>
            </li>
            {/* <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/instamart">Instamart</Link>
            </li> */}
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <div>
                {isloggedin ? (
                  <div>
                    <Link to="/">
                      <button
                        className=""
                        onClick={() => {
                          setislogged(false);
                        }}
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <button
                        className=""
                        onClick={() => {
                          setislogged(true);
                        }}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li className="p-3 font-bold  hover:bg-orange-400 rounded-md">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
