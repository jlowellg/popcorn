import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import WatchlistCSS from "../styles/Watchlist.module.css";

const Watchlist = () => {
  const { watchlist } = useContext(DataContext);
  return (
    <>
      {watchlist.map((item) => (
        <div className={`${WatchlistCSS.resultsContainer}`} key={item.id}>
          <div className={`${WatchlistCSS.detailsContainer}`}>
            <Link to={`/${item.type ? "movie" : "tv"}/${item.id}`}>
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Watchlist;
