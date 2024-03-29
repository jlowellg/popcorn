import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBarCSS from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { useToast } from "../ui/use-toast";

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
  const { setIsLoggedIn, backendURL } = useContext(DataContext);
  const username = localStorage.getItem("username");

  const { toast } = useToast();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendURL}/user/logout`);
      localStorage.removeItem("username");
      console.log("Logout successful");
      navigate("/");
      setIsLoggedIn(null);
      toast({
        title: "Logout successful",
      });
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
            <Link reloadDocument to="/watchlist">
              <NavigationMenuLink className={NavBarCSS.userNavItem}>
                Watchlist
              </NavigationMenuLink>
            </Link>
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
