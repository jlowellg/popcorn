import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import HomepageCSS from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

const TrendingTVShows = () => {
  const { trendingTVShows, setTrendingTVShows } = useContext(DataContext);
  const url = "https://api.themoviedb.org/3/trending/tv/day";
  const { key } = useContext(KeyContext);

  useEffect(() => {
    const fetchTrendingTVShows = async () => {
      try {
        const response = await axios.get(url, key);
        setTrendingTVShows(response.data.results.slice(0, 10));
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
    fetchTrendingTVShows();
  }, []);

  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Trending TV Shows
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {trendingTVShows.map((trendingTVShow) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={trendingTVShow.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${trendingTVShow.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              <Link to={`/tv/${trendingTVShow.id}`}>{trendingTVShow.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTVShows;
