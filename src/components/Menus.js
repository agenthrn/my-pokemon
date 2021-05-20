import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuLink, MenuItem, AppName, Heading, Navbar } from "../_style";

function Menus() {
  return (
    <div className={Navbar}>
      <ul className={Menu}>
        <li className={AppName}>
          <h1 className={Heading} to="/">
            Pokemon Apps
          </h1>
        </li>
        <li className={MenuItem}>
          <Link className={MenuLink} to="/">
            My Pokemon
          </Link>
        </li>
        <li className={MenuItem}>
          <Link className={MenuLink} to="/">
            Pokemon List
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menus;
