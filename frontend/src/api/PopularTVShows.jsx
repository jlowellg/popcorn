import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import HomepageCSS from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

const PopularTVShows = () => {
  const { popularTVShows, setPopularTVShows } = useContext(DataContext);
  const url = "https://api.themoviedb.org/3/tv/popular";
  const { key } = useContext(KeyContext);

  useEffect(() => {
    const fetchPopularTVShows = async () => {
      try {
        const response = await axios.get(url, key);
        setPopularTVShows(response.data.results.slice(0, 10));
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
    fetchPopularTVShows();
  }, []);

  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Popular TV Shows
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {popularTVShows.map((popularTVShow) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={popularTVShow.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${popularTVShow.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              <Link to={`/tv/${popularTVShow.id}`}>{popularTVShow.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTVShows;
