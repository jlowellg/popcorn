import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import PopularMovies from "../components/sub/PopularMovies";

const GetPopularMovies = () => {
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

  return <PopularMovies />;
};

export default GetPopularMovies;
