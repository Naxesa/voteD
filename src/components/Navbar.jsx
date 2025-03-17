import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav__container">
      <Link to="/" className="nav__logo">
        VOTE
      </Link>
      <div className="menu__mobile">
        <button
          className="theme__toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <HiOutlineBars3 />}
        </button>
      </div>
      <menu className={menuOpen ? "menu__open" : ""}>
        <NavLink to="/elections">Elections</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </menu>
      <button
        className="theme__toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <IoMdSunny /> : <IoIosMoon />}
      </button>
    </div>
  );
};

export default Navbar;
