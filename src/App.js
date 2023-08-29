import React, { Suspense, lazy, useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RestaurantMenu } from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/userContext";
import searchContext from "./utils/searchContext";
import { LatLng } from "./utils/LatLng";

import { Provider } from "react-redux";
import store from "./utils/store";
import Login, { LoginForm } from "./components/login";
import Register, {
  RegistrationForm,
  RegistrationForm1,
} from "./components/Register";

const Instamart = lazy(() => import("./components/Instamart"));
// const heading = React.createElement("h1", { id: "title" }, "react");
import Contact from "./components/contactUs";
import AboutUs from "./components/AboutUs";

import LoggedInfo from "./utils/loggedinfo";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [islogged, setislogged] = useState(false);

  const [searchedfor, setsearchedfor] = useState("current");

  const [coords, setcoords] = useState({
    lat: 0,
    lng: 0,
  });

  return (
    <Provider store={store}>
      <LoggedInfo.Provider
        value={{ isloggedin: islogged, setisloggedin: setislogged }}
      >
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <LatLng.Provider value={{ coords: coords, setcoords: setcoords }}>
            <searchContext.Provider
              value={{
                searchedfor: searchedfor,
                setsearchedfor: setsearchedfor,
              }}
            >
              <Header />
              <Outlet />
              <Footer />
            </searchContext.Provider>
          </LatLng.Provider>
        </UserContext.Provider>
      </LoggedInfo.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        // element: <Login />,
        element: <LoginForm />,
      },
      {
        path: "/register",
        // element: <Register />,
        element: <RegistrationForm1 />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
// root.render(<App />);
