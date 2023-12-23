import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Popular from "./Popular";

const MovieLists = () => {
  const [movies, setMovies] = useState([]);
  const popularUrl = "https://api.themoviedb.org/3/movie/popular?";
  const key = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjVmMjgzY2M5NGY4MjA3YTRjODYwMWQ3NWYwMzZmNSIsInN1YiI6IjY1N2VjNWYzMzIzZWJhMzY0OTg3YTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VsTqRQTrv_LllZfSlBiNQm_2sYM28RvgnaQq_PXeuk",
    },
  };

  /*const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${search}`;*/

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await axios.get(popularUrl, key);
        setMovies(response.data.results);
        console.log(response.data.results);
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
    fetchPopular();
  }, []);

  return <Popular movies={movies} />;
};

export default MovieLists;
