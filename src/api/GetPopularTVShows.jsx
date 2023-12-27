import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import PopularTVShows from "../components/sub/PopularTVShows";

const GetPopularTVShows = () => {
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

  return <PopularTVShows />;
};

export default GetPopularTVShows;
