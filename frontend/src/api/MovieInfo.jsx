import React from "react";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import HeroCSS from "../styles/Hero.module.css";
import { Button } from "../components/ui/button";
import axios from "axios";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useToast } from "../components/ui/use-toast";

const MovieInfo = () => {
  const { movieInfo, genres, isLoggedIn, inWatchlist, setInWatchlist } =
    useContext(DataContext);

  const username = localStorage.getItem("username");
  const { toast } = useToast();

  const movieData = {
    user: username,
    id: movieInfo.id,
    title: movieInfo.title,
    type: "Movie",
    dateReleased: movieInfo.release_date,
    posterPath: movieInfo.poster_path,
    dateAdded: Date.now(),
  };

  const itemId = movieInfo.id;

  useEffect(() => {
    const fetchIfExisting = async () => {
      try {
        const response = await axios.get(
          `https://popcorn-backend.onrender.com/watchlist/check/${username}/${itemId}`
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
        "https://popcorn-backend.onrender.com/watchlist/add",
        movieData
      );
      toast({
        title: `${movieInfo.title} added.`,
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

  const handleUnsave = async (event) => {
    event.preventDefault();
    setInWatchlist(false);
    try {
      const response = await axios.get(
        `https://popcorn-backend.onrender.com/watchlist/unsave/${username}/${itemId}`
      );
      toast({
        title: `${movieInfo.title} removed.`,
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
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
      }}
      className={`${HeroCSS.backdropContainer}`}
    >
      <div className={`${HeroCSS.heroContainer}`}>
        <div className={`${HeroCSS.mainContainer}`}>
          <div className={`${HeroCSS.posterContainer}`}>
            <img
              className={`${HeroCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
            />
          </div>
          <div className={`${HeroCSS.detailsContainer}`}>
            <div className={` ${HeroCSS.largeTitle} ${HeroCSS.red}`}>
              {movieInfo.title}
            </div>
            <div>
              <div className={`${HeroCSS.title}`}>Overview</div>
              <div className={`${HeroCSS.normalText}`}>
                {movieInfo.overview}
              </div>
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
              <div className={`${HeroCSS.gray}`}>{movieInfo.release_date}</div>
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

export default MovieInfo;
