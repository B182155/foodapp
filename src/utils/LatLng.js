import { createContext } from "react";
export const LatLng = createContext({
  coords: {
    lat: 0,
    lng: 0,
    place: "current",
  },
});
