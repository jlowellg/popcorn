import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import SearchResults from "../components/sub/SearchResults";
import { useParams } from "react-router-dom";

const GetSearchResults = () => {
  const { category, setResults } = useContext(DataContext);
  const { key } = useContext(KeyContext);

  const { query } = useParams();

  const url = `https://api.themoviedb.org/3/search/${category}?query=${encodeURIComponent(
    query
  )}`;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(url, key);
        setResults(response.data.results);
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
    fetchSearchResults();
  }, [query, category]);

  return <SearchResults />;
};

export default GetSearchResults;
