import React, { useEffect, useState, useContext } from "react";
import UserContext from "../utils/userContext";
import LoggedInfo from "../utils/loggedinfo";

import UserTransactions from "../components/trasactions";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Navigate } from "react-router-dom";

export const MyAccount = () => {
  const { user } = useContext(UserContext);
  const { isloggedin } = useContext(LoggedInfo);
  const [trns, getTrns] = useState([]);

  if (isloggedin) {
    useEffect(() => {
      transactions();
    }, []);
  } else {
    return <Navigate to="/" />;
  }

  async function transactions() {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/${user.id}`
      );

      getTrns(res.data.UserTrasactions);

      console.log(res.data.UserTrasactions);
      // console.log(trns);
    } catch (error) {
      const message = error.response.data.message;
      console.error(error.response.data);
    }
  }

  return (
    <div className="bg-[#37718e]">
      <div className="mx-auto my-0 z-10  w-[80%]">
        <div className="text-white pl-20 py-6 pt-12">
          <h1 className="text-3xl font-bold">
            <PersonOutlineIcon className="scale-[1.5] mr-3 mb-2 " />
            {user?.name[0]?.toUpperCase() + user.name.slice(1)}
          </h1>
          <h1 className="text-base font-normal">{user.email}</h1>
        </div>
        <div className="bg-white z-10  rounded-lg">
          <div className="text-center rounded-xl ml-20 mr-20 ">
            <h1 className=" text-3xl font-bold p-5 text-gray-600">
              <span className="bg-pink-50 p-2 rounded-md">
                User Transactions
              </span>
            </h1>
          </div>
          <div className="rounded-xl p-2 ml-20 mr-20">
            <div>
              {trns.map((cd) => {
                const card = cd;
                return <UserTransactions key={card._id} card={card} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
