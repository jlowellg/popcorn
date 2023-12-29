import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import HomepageCSS from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const { trendingMovies, setTrendingMovies } = useContext(DataContext);
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const { key } = useContext(KeyContext);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(url, key);
        setTrendingMovies(response.data.results.slice(0, 10));
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
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Trending Movies
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {trendingMovies.map((trendingMovie) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={trendingMovie.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${trendingMovie.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              <Link to={`/movie/${trendingMovie.id}`}>
                {trendingMovie.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
