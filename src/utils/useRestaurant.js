import { useState, useEffect, useContext } from "react";
import { LatLng } from "./LatLng";
// import { RESTAUTANT_URL } from "../constants";

export const useRestaurant = (id) => {
  const [restaurantinfo, setRestaurantinfo] = useState(null);
  const [cards, setCards] = useState([]);
  const { coords } = useContext(LatLng);
  const { lat, lng } = { ...coords };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}`
    );
    const json = await data?.json();
    // console.log(json.data);

    const { info } = json?.data?.cards[0]?.card?.card;
    const { cards } = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    setRestaurantinfo(info);
    setCards(cards);
  }
  return [restaurantinfo, cards];
};
