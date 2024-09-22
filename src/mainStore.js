import { createContext } from "react";

const Store = createContext({
  num: 0,
  increment: () => {},
});

export default Store;
