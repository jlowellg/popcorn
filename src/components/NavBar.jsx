import React from "react";
import NavBarCSS from "../styles/NavBar.module.css";
import SelectCategory from "./SelectCategory";
import { Input } from "../../components/ui/input";

const NavBar = () => {
  return (
    <nav className={NavBarCSS.navContainer}>
      <div className={NavBarCSS.navBar}>
        <div className={`${NavBarCSS.title} ${NavBarCSS.navChild}`}>
          Popcorn
        </div>
        <div className={`${NavBarCSS.searchForm}`}>
          <SelectCategory />
          <Input type="email" placeholder="Search" />
        </div>
        <div className={`${NavBarCSS.menu} ${NavBarCSS.navChild}`}>
          Home | Sign in{" "}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
