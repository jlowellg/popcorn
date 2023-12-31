import React from "react";
import NavBarCSS from "../../styles/NavBar.module.css";
import SearchForm from "../sub/SearchForm";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={NavBarCSS.navContainer}>
      <div className={NavBarCSS.navBar}>
        <div className={`${NavBarCSS.title} ${NavBarCSS.navChild}`}>
          <Link to="/">Popcorn</Link>
        </div>
        <div className={`${NavBarCSS.searchFormContainer}`}>
          <SearchForm />
        </div>
        <div className={`${NavBarCSS.menu} ${NavBarCSS.navChild}`}>
          <Link to="/">Home </Link> | <Link to="/login">Sign in</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
