import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "",
    email: "",
  },
  isloggedin: false,
});

export default UserContext;
