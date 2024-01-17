import React from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import NavBarCSS from "../../styles/NavBar.module.css";
import SearchForm from "../sub/SearchForm";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import UserNavigation from "../sub/UserNavigation";

const NavBar = () => {
  const { isLoggedIn } = useContext(DataContext);
  const username = localStorage.getItem("username");

  return (
    <nav className={NavBarCSS.navContainer}>
      <div className={NavBarCSS.navBar}>
        <div
          className={`${NavBarCSS.title} ${NavBarCSS.navChild} ${NavBarCSS.lineContainer}`}
        >
          <Link reloadDocument to="/" className={`${NavBarCSS.lineContainer}`}>
            <img
              src="\public\images\PopcornLogo.png"
              className={`${NavBarCSS.popcorn}`}
            />
            Popcorn
          </Link>
        </div>
        <div className={`${NavBarCSS.searchFormContainer}`}>
          <SearchForm />
        </div>
        <div className={`${NavBarCSS.menu} ${NavBarCSS.navChild}`}>
          <Link reloadDocument to="/">
            Home
          </Link>
          |
          {isLoggedIn || username ? (
            <UserNavigation />
          ) : (
            <Link reloadDocument to="/login">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
