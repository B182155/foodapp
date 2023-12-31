import { useEffect, useState, useContext } from "react";
import Restaurantcard from "./restaurantcard";
import Shimmer from "./shimmer";
import { filterData } from "../utils/helper";
import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";

import UserContext from "../utils/userContext";
import searchContext from "../utils/searchContext";
import { LatLng } from "../utils/LatLng";

const Body = () => {
  const [searchInput, setsearchInput] = useState("search");
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [allrestaurants, setallrestaurants] = useState([]);

  // const [position, setPosition] = useState(null);

  const { user, setUser } = useContext(UserContext);
  const { searchedfor } = useContext(searchContext);
  const { coords, setcoords } = useContext(LatLng);

  useEffect(() => {
    searcFunction();
  }, [searchedfor]);

  async function searcFunction() {
    try {
      if (searchedfor === "current") {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude } = pos.coords;
          const { longitude } = pos.coords;
          // console.log(latitude, longitude);

          setcoords({
            lat: latitude,
            lng: longitude,
          });

          getrestaurants(latitude, longitude);
        });
      } else {
        const data = await fetch(
          `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchedfor}&types=`
        );
        const json = await data?.json();
        const placeId = json?.data[0]?.place_id;
        // console.log(placeId);

        const placeData = await fetch(
          `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`
        );

        const placejson = await placeData?.json();
        const { location } = placejson?.data[0]?.geometry;
        const { lat, lng } = { ...location };

        console.log(placejson);
        // console.log(lat, lng);
        // console.log(coords);

        setcoords({
          lat: lat,
          lng: lng,
          place: placejson?.data[0]?.formatted_address,
        });

        getrestaurants(lat, lng);
      }
    } catch (err) {
      return <h1>{console.log(err)}</h1>;
    }
  }

  async function getrestaurants(lat, long) {
    const data = await fetch(
      // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3286389&lng=78.52384529999999&page_type=DESKTOP_WEB_LISTING`
      // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    const json = await data.json();

    const restaurantsData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // console.log(restaurantsData);

    setallrestaurants(restaurantsData);
    setfilteredrestaurants(restaurantsData);
    console.log(coords);

    console.log(allrestaurants);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 You are Offline ,Please reconnect to the internet</h1>;
  }

  if (!allrestaurants) {
    return null;
  }

  return allrestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[90%] overflow-x-auto overflow-y-hidden mx-auto my-0">
      <div className="w-[30%] mx-auto my-3 p-4 rounded-md">
        <div className="flex justify-between rounded-md  border-[3px] border-gray-300">
          <input
            type="text"
            className="search-input  p-2 w-full rounded-s-md"
            placeholder="search a restaurant you want..."
            // value={searchInput}
            onChange={(e) => {
              setsearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn bg-blue-200  p-1 border-solid rounded-e-md hover:bg-teal-600"
            onClick={() => {
              const fdata = filterData(searchInput, allrestaurants);
              setfilteredrestaurants(fdata);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="restaurant-list grid grid-cols-4 gap-8 justify-between ">
        {filteredrestaurants.length == 0 ? (
          <h1>No such restaurants</h1>
        ) : (
          filteredrestaurants.map((restaurant) => {
            // console.log(restaurant.data.id);

            return (
              <Link
                // to={"/restaurant/" + restaurant.data.id}
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
                className="inline-block rounded-md hover:shadow-lg hover:border-2 hover:scale-[1.1] transition-transform hover:outline-slate-500 border-solid border-b-slate-500 hover:bg-blue-50"
              >
                <Restaurantcard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
