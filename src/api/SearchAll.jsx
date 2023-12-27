import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Popular from "./Popular";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";

const SearchAll = () => {
  const { url, movies, setMovies, search } = useContext(DataContext);
  const { key } = useContext(KeyContext);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await axios.get(url, key);
        setMovies(response.data.results);
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
    fetchSearch();
  }, []);

  return <Popular />;
};

export default SearchAll;
