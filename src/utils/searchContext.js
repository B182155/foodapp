import { createContext } from "react";

const searchContext = createContext({
  searchedfor: "current",
});

export default searchContext;
