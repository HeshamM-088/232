import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Store from "./mainStore";
import NewComp from "./components/NewComp";

const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  return (
    <Store.Provider value={{ num, increment }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/new-comp" element={<NewComp />} />
      </Routes>
    </Store.Provider>
  );
};

export default App;
