import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import ResultsCSS from "../styles/Results.module.css";
import Results from "./Results";

const SearchResults = () => {
  const { category, results, setResults, isLoading, setIsLoading } =
    useContext(DataContext);
  const { key } = useContext(KeyContext);

  const { query } = useParams();

  const url = `https://api.themoviedb.org/3/search/${category}?query=${encodeURIComponent(
    query
  )}`;

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, category]);

  return (
    <div className={`${ResultsCSS.mainContainer}`}>
      <div className={`${ResultsCSS.label}`}>Search: "{query}"</div>
      {isLoading ? (
        <div className={`${ResultsCSS.searchStatus}`}>Loading...</div>
      ) : results.length ? (
        <Results />
      ) : (
        <div className={`${ResultsCSS.searchStatus}`}>No results to show.</div>
      )}
    </div>
  );
};

export default SearchResults;
