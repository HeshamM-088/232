import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { TbXboxX, TbXboxXFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightbulb } from "react-icons/md";

const NavList = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (
      localStorage.th === "dark" ||
      (!("th" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        variant="small"
        to="/"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Home
      </Typography>

      <Typography
        as={Link}
        variant="small"
        to="/main"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Main
      </Typography>

      <Typography variant="small" color="blue-gray" className="p-1 font-medium">
        {mode == "light" ? (
          <MdDarkMode
            className="text-3xl cursor-pointer"
            onClick={() => {
              localStorage.th = "light";
              setMode("dark");
            }}
          />
        ) : (
          <MdLightbulb
            className="text-3xl cursor-pointer"
            onClick={() => {
              localStorage.th = "dark";
              setMode("light");
            }}
          />
        )}
      </Typography>
    </ul>
  );
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar className="mx-auto max-w-screen-3xl bg-red-600 dark:bg-green-700 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Hesham Update
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <TbXboxX className="h-6 w-6" strokeWidth={2} />
          ) : (
            <TbXboxXFilled className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
