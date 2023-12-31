import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import HomepageCSS from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const { popularMovies, setPopularMovies } = useContext(DataContext);
  const url = "https://api.themoviedb.org/3/movie/popular";
  const { key } = useContext(KeyContext);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(url, key);
        setPopularMovies(response.data.results.slice(0, 10));
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
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Popular Movies
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {popularMovies.map((popularMovie) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={popularMovie.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${popularMovie.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              <Link to={`/movie/${popularMovie.id}`}>{popularMovie.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
