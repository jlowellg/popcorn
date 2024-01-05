import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";
import WatchlistCSS from "../styles/Watchlist.module.css";
import Watchlist from "./Watchlist";
import FilterBy from "../components/sub/FilterBy";
import OrderBy from "../components/sub/OrderBy";
import FindBy from "../components/sub/FindBy";
import { Button } from "../components/ui/button";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

const GetWatchlist = () => {
  const {
    watchlist,
    setWatchlist,
    isLoading,
    setIsLoading,
    reload,
    ascending,
    setAscending,
  } = useContext(DataContext);

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
  }, [reload]);

  const handleAsc = (event) => {
    event.preventDefault();
    setAscending(!ascending);
  };

  return (
    <div className={`${WatchlistCSS.mainContainer}`}>
      <div className={`${WatchlistCSS.header}`}>
        <div className={`${WatchlistCSS.headerLabel}`}>Watchlist</div>
        <div className={`${WatchlistCSS.headerMenu}`}>
          <div>
            <label>Filter by:</label>
            <FilterBy />
          </div>
          <div>
            <label>Find by:</label>
            <FindBy />
          </div>
          <div>
            <label>Order by:</label>
            <div className={`${WatchlistCSS.headerMenu}`}>
              <OrderBy />
              {ascending ? (
                <Button onClick={handleAsc} variant="outline" size="icon">
                  <ArrowUpIcon className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleAsc} variant="outline" size="icon">
                  <ArrowDownIcon className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />

      {isLoading ? (
        <div className={`${WatchlistCSS.watchlistStatus}`}>Loading...</div>
      ) : watchlist.length ? (
        <Watchlist />
      ) : (
        <div className={`${WatchlistCSS.watchlistStatus}`}>
          No available items.
        </div>
      )}
    </div>
  );
};

export default GetWatchlist;
