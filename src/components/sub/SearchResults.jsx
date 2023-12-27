import React from "react";
import { useContext, useState, useEffect } from "react";
import ResultsCSS from "../../styles/Results.module.css";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { category, search, results } = useContext(DataContext);
  const { query } = useParams();

  return (
    <div className={`${ResultsCSS.mainContainer}`}>
      <div className={`${ResultsCSS.label}`}>Search: "{query}"</div>
      {results.length ? null : (
        <div className={`${ResultsCSS.noResult}`}>No results to show.</div>
      )}
      {results.map((result) => (
        <div className={`${ResultsCSS.resultsContainer}`} key={result.id}>
          <div className={`${ResultsCSS.posterContainer}`}>
            <img
              className={`${ResultsCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            />
          </div>
          <div className={`${ResultsCSS.detailsContainer}`}>
            <div className={`${ResultsCSS.lineContainer} ${ResultsCSS.title}`}>
              <div>Title:</div>
              <div className={`${ResultsCSS.red}`}>
                {result.title || result.name}
              </div>
            </div>
            <div
              className={`${ResultsCSS.lineContainer} ${ResultsCSS.description} ${ResultsCSS.gray}`}
            >
              <div>Type:</div>
              <div className={`${ResultsCSS.bold}`}>
                {result.title ? "Movie" : "TV Series"}
              </div>
            </div>
            <div
              className={`${ResultsCSS.lineContainer} ${ResultsCSS.description} ${ResultsCSS.gray}`}
            >
              {result.release_date || result.first_air_date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
