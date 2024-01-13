import React from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarCSS from "../../styles/NavBar.module.css";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";

const UserNavigation = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/logout");
      localStorage.removeItem("username");
      console.log("Logout successful");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{username}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className={NavBarCSS.userNavItem}>
              <Link reloadDocument to="/watchlist">
                Watchlist
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              className={NavBarCSS.userNavItem}
              onClick={handleLogout}
            >
              Logout
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default UserNavigation;
