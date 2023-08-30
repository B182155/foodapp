import React, { useContext } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { MenuItem } from "./MenuItem";
import cartEmpty from "../assets/img/cartEmpty.png";
import { Link, Navigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { transaction } from "../../backend/Controllers/transactionController";

import LoggedInfo from "../utils/loggedinfo";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const dynamicClass = cartItems.length == 0 ? "block" : "flex gap-10";
  const width = cartItems.length == 0 ? "w-[70%]" : "w-[85%]";

  const { isloggedin } = useContext(LoggedInfo);

  const itemTotal = cartItems.reduce((accumulator, item) => {
    return (
      accumulator +
      ((item?.price / 100) * item?.count ||
        (item?.defaultPrice / 100) * item?.count)
    );
  }, 0);

  const gst = Math.trunc(itemTotal * 0.05);

  const topay = itemTotal + gst;

  const handleClear = () => {
    dispatch(clearCart());
  };

  const Handletransaction = async () => {
    const transaction = {
      cartitems: cartItems,
      totalAmount: topay,
    };

    if (isloggedin) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/v1/transaction",
          transaction
        );

        const message = res.data.message;
        alert(
          `Your order has been placed successfully! Your Order ID is ${res.data._id}.`
        );
        console.log(res.data);
      } catch (error) {
        const message = error.response.data.message;

        console.error(error.response.data);
      }
    } else {
      alert("Please Login to place your orders");
      return <Navigate to="/login" />;
    }
  };

  return (
    <div className={`w-[95%]  mx-auto my-0 ${dynamicClass}`}>
      <div
        className={`flex flex-col p-2 ${width} h-[80vh] overflow-y-auto overflow-x-hidden gap-7`}
      >
        <div className="flex justify-center gap-56 mt-2">
          <h1 className="text-4xl font-mono font-extrabold ">
            <ShoppingCartCheckoutIcon className="scale-[2.5]" /> -{" "}
            {cartItems.length}
          </h1>
          <button
            className="bg-purple-300 p-3 rounded-md font-sans font-bold"
            onClick={handleClear}
          >
            CLEAR CART
          </button>
        </div>
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
      {cartItems.length == 0 ? (
        <></>
      ) : (
        <div className="flex flex-col w-[25%] mx-auto mt-[86] pt-14 p-5 gap-4 bg-pink-50 rounded-md">
          <h1 className="text-2xl font-sans font-bold mb-5">Bill Details</h1>

          <div className="flex justify-between text-slate-800">
            <div>Item total</div>
            <div>
              <CurrencyRupeeIcon className="scale-90 text-slate-800" />
              {itemTotal + " /-"}
            </div>
          </div>
          <div className="flex justify-between text-slate-800 border-b-2 border-solid border-b-slate-500 pb-6 ">
            <div>GST and Restaurant Charges</div>
            <div>
              <CurrencyRupeeIcon className="scale-90 text-slate-800" />
              {gst + " /-"}
            </div>
          </div>

          <div className="flex justify-between text-slate-800 border-b-2 border-solid border-b-slate-500 pb-5 ">
            <div>TO PAY</div>
            <div>
              <CurrencyRupeeIcon className="scale-90 text-slate-800" />
              {topay + " /-"}
            </div>
          </div>
          <button
            className="bg-purple-300 p-3 rounded-md font-sans font-bold"
            onClick={Handletransaction}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
