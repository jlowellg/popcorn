import React from "react";
import { useContext, useEffect, useState } from "react";
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

import { Unsave } from "../components/sub/UnsaveAlert";
import { EditWatchlistItem } from "../components/sub/EditWatchlistItem";
import { useToast } from "../components/ui/use-toast";

const Watchlist = () => {
  const {
    watchlist,
    setWatchlist,
    reload,
    setReload,
    filtered,
    setFiltered,
    filterBy,
    findBy,
    orderBy,
    sorted,
    setSorted,
    ascending,
    setAscending,
    isLoading,
  } = useContext(DataContext);

  const username = localStorage.getItem("username");
  const { toast } = useToast();

  const [fetchingFiltered, SetFetchingFiltered] = useState(true);

  const handleFavorite = async (itemId) => {
    setReload(!reload);
    try {
      const response = await axios.get(
        `http://localhost:5000/watchlist/favorite/${username}/${itemId}`
      );
      toast({
        title: `${response.data.message} added to favorites.`,
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

  const handleUnfavorite = async (itemId) => {
    setReload(!reload);
    try {
      const response = await axios.get(
        `http://localhost:5000/watchlist/unfavorite/${username}/${itemId}`
      );
      toast({
        title: `${response.data.message} removed from favorites.`,
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

  useEffect(() => {
    const fetchFilter = async () => {
      try {
        const response = await watchlist.filter((item) => {
          const typeCondition =
            filterBy === "all" ? true : item.type === filterBy;
          const statusCondition =
            findBy === "all"
              ? true
              : findBy === "favorites"
              ? item.favorite === true
              : item.status === findBy;
          return typeCondition && statusCondition;
        });
        setFiltered(response);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchFilter();
  }, [filterBy, findBy]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await filtered.sort((a, b) => {
          if (orderBy === "dateAdded") {
            if (ascending === true) {
              return new Date(b.dateAdded) - new Date(a.dateAdded);
            } else {
              return new Date(a.dateAdded) - new Date(b.dateAdded);
            }
          } else if (orderBy === "myRating") {
            if (ascending === true) {
              return b.myRating - a.myRating;
            } else {
              return a.myRating - b.myRating;
            }
          }
        });
        setSorted(response);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchOrder();
  }, [filtered, ascending, orderBy]);

  useEffect(() => {
    console.log(filterBy, findBy, orderBy, ascending);
  }, [filterBy, findBy, orderBy, ascending]);

  useEffect(() => {
    SetFetchingFiltered(false);
  }, [filterBy, findBy]);

  return (
    <>
      {fetchingFiltered ? null : filtered.length ? null : (
        <div className={`${WatchlistCSS.watchlistStatus}`}>
          No items to show.
        </div>
      )}
      {sorted.map((item) => (
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

            <EditWatchlistItem id={item.id} title={item.title} />
            <Unsave id={item.id} title={item.title} />
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
                <div>
                  {item.dateFinished
                    ? format(new Date(item.dateFinished), "yyyy-MM-dd")
                    : "-"}
                </div>
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
