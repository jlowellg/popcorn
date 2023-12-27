import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import TrendingTVShows from "../components/sub/TrendingTVShows";

const GetTrendingTVShows = () => {
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

  return <TrendingTVShows />;
};

export default GetTrendingTVShows;
