import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { MenuItem } from "./MenuItem";
import cartEmpty from "../assets/img/cartEmpty.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col p-2 ml-40 mr-40">
      <h1 className="text-center underline text-4xl font-mono font-extrabold mb-3 p-2">
        Cart Items-{cartItems.length}
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center flex flex-col items-center">
          <img src={cartEmpty} className="w-52 h-52 mb-1 p-2" />
          {/* <div className="items-center">
            
          </div> */}
          <h1 className="text-4xl font-bold font-mono mb-1 p-2">
            Your Cart is Empty
          </h1>
          <Link to="/" className="text-2xl font-mono mb-1 p-2 bg-pink-200">
            You can go to home page to view more restaurants
          </Link>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item?.id}>
                <MenuItem itemInfo={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cart;
