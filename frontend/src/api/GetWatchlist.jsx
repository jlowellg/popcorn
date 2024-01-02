import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";
import WatchlistCSS from "../styles/Watchlist.module.css";
import Watchlist from "./Watchlist";

const GetWatchlist = () => {
  const { watchlist, setWatchlist, isLoading, setIsLoading } =
    useContext(DataContext);

  useEffect(() => {
    const fetchWatchlist = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/watchlist/get");
        setWatchlist(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchWatchlist();
  }, []);

  return (
    <div className={`${WatchlistCSS.mainContainer}`}>
      <div className={`${WatchlistCSS.label}`}>Watchlist</div>
      {isLoading ? (
        <div className={`${WatchlistCSS.searchStatus}`}>Loading...</div>
      ) : watchlist.length ? (
        <Watchlist />
      ) : (
        <div className={`${WatchlistCSS.searchStatus}`}>
          No available items.
        </div>
      )}
    </div>
  );
};

export default GetWatchlist;
