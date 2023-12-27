import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import TrendingMovies from "../components/sub/TrendingMovies";

const GetTrendingMovies = () => {
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

  return <TrendingMovies />;
};

export default GetTrendingMovies;
