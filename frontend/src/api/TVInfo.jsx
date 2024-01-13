import React from "react";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import HeroCSS from "../styles/Hero.module.css";
import { Button } from "../components/ui/button";
import axios from "axios";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";

const TVInfo = () => {
  const { TVInfo, genres, isLoggedIn, inWatchlist, setInWatchlist } =
    useContext(DataContext);

  const username = localStorage.getItem("username");

  const TVData = {
    user: username,
    id: TVInfo.id,
    title: TVInfo.name,
    type: "TV Series",
    dateReleased: TVInfo.first_air_date,
    posterPath: TVInfo.poster_path,
    dateAdded: Date.now(),
  };

  const itemId = TVInfo.id;

  useEffect(() => {
    const fetchIfExisting = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/watchlist/check/${username}/${itemId}`
        );
        setInWatchlist(response.data.exists);
      } catch (error) {
        console.error("Error checking item:", error);
      }
    };

    fetchIfExisting();
  }, [itemId]);

  const handleSave = async (event) => {
    event.preventDefault();
    setInWatchlist(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/watchlist/add",
        TVData
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

  const handleUnsave = async (event) => {
    event.preventDefault();
    setInWatchlist(false);
    try {
      const response = await axios.get(
        `http://localhost:5000/watchlist/unsave/${username}/${itemId}`
      );
      console.log(itemId);
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
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${TVInfo.backdrop_path})`,
      }}
      className={`${HeroCSS.backdropContainer}`}
    >
      <div className={`${HeroCSS.heroContainer}`}>
        <div className={`${HeroCSS.mainContainer}`}>
          <div className={`${HeroCSS.posterContainer}`}>
            <img
              className={`${HeroCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${TVInfo.poster_path}`}
            />
          </div>
          <div className={`${HeroCSS.detailsContainer}`}>
            <div className={` ${HeroCSS.largeTitle} ${HeroCSS.red}`}>
              {TVInfo.name}
            </div>
            <div>
              <div className={`${HeroCSS.title}`}>Overview</div>
              <div className={`${HeroCSS.normalText}`}>{TVInfo.overview}</div>
            </div>
            <div
              className={`${HeroCSS.title} ${HeroCSS.gray} ${HeroCSS.lineContainer}`}
            >
              {genres.map((genre, index) => (
                <div key={genre.id}>
                  {genre.name} {index !== genres.length - 1 ? "|" : null}
                </div>
              ))}
            </div>
            <div className={`${HeroCSS.title} ${HeroCSS.lineContainer}`}>
              <div>Release Date:</div>
              <div className={`${HeroCSS.gray}`}>{TVInfo.first_air_date}</div>
            </div>

            {username ? (
              <div>
                {inWatchlist ? (
                  <Button
                    onClick={handleUnsave}
                    variant="secondary"
                    className={`${HeroCSS.test}`}
                  >
                    <BookmarkFilledIcon className="mr-2 h-4 w-4" />
                    Remove from Watchlist
                  </Button>
                ) : (
                  <Button onClick={handleSave}>
                    <BookmarkIcon className="mr-2 h-4 w-4" />
                    Add to Watchlist
                  </Button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVInfo;
