import React from "react";
import { useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import WatchlistCSS from "../styles/Watchlist.module.css";
import { Button } from "../components/ui/button";
import { format } from "date-fns";
import {
  Pencil2Icon,
  BookmarkIcon,
  BookmarkFilledIcon,
  HeartIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";

import { Alert } from "../components/sub/UnsaveAlert";

const Watchlist = () => {
  const { watchlist, reload, setReload } = useContext(DataContext);

  const handleFavorite = async (itemId) => {
    setReload(!reload);
    try {
      const response = await axios.get(
        `http://localhost:5000/watchlist/favorite/${itemId}`
      );
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

  const handleUnfavorite = async (itemId) => {
    setReload(!reload);
    try {
      const response = await axios.get(
        `http://localhost:5000/watchlist/unfavorite/${itemId}`
      );
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
    <>
      {watchlist.map((item) => (
        <div className={`${WatchlistCSS.resultsContainer}`} key={item.id}>
          <div className={`${WatchlistCSS.titleMenu}`}>
            {item.favorite ? (
              <Button variant="ghost" onClick={() => handleUnfavorite(item.id)}>
                <HeartFilledIcon className="h-6 w-6" />
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => handleFavorite(item.id)}>
                <HeartIcon className="h-6 w-6" />
              </Button>
            )}

            <Button variant="ghost">
              <Pencil2Icon className="h-6 w-6" />
            </Button>
            <Alert id={item.id} title={item.title} />
          </div>

          <div className={`${WatchlistCSS.posterContainer}`}>
            <img
              className={`${WatchlistCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${item.posterPath}`}
            />
          </div>

          <div className={`${WatchlistCSS.detailsContainer}`}>
            <div className={`${WatchlistCSS.title} ${WatchlistCSS.red}`}>
              {item.title}
            </div>

            <div className={`${WatchlistCSS.description} ${WatchlistCSS.bold}`}>
              {item.type}
            </div>

            <div className={`${WatchlistCSS.description}`}>
              Release Date: {format(new Date(item.dateReleased), "yyyy-MM-dd")}
            </div>

            <div
              className={`${WatchlistCSS.lineContainer} ${WatchlistCSS.smallText}`}
            >
              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>Date Added:</div>
                <div>{format(new Date(item.dateAdded), "yyyy-MM-dd")}</div>
              </div>

              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>Status:</div>
                <div>{item.status}</div>
              </div>

              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>Current Episode:</div>
                <div>{item.currentEpisode ? item.currentEpisode : "-"}</div>
              </div>

              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>Date Finished:</div>
                <div>{item.dateFinished ? item.dateFinished : "-"}</div>
              </div>

              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>Favorite:</div>
                <div>{item.favorite ? "true" : "false"}</div>
              </div>

              <div className={`${WatchlistCSS.boxContainer}`}>
                <div>My Rating:</div>
                <div>{item.myRating ? item.myRating : "-"}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Watchlist;

//<Button onClick={() => handleUnsave(item.id)}>Unsave</Button>
