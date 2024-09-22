import React, { useContext } from "react";
import Store from "../mainStore";
import { Button } from "@material-tailwind/react";

const Main2 = () => {
  const { increment, num } = useContext(Store);

  return (
    <div className="text-center">
      <h1>Main2</h1>
      <h1>{num}</h1>
      <Button onClick={() => increment()}>+</Button>
    </div>
  );
};

export default Main2;
