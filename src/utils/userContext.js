import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "DummyName",
    email: "support@gmail.com",
  },
});

export default UserContext;
