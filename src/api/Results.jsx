import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import ResultsCSS from "../styles/Results.module.css";

const Results = () => {
  const { results } = useContext(DataContext);
  return (
    <>
      {results.map((result) => (
        <div className={`${ResultsCSS.resultsContainer}`} key={result.id}>
          <div className={`${ResultsCSS.posterContainer}`}>
            <img
              className={`${ResultsCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            />
          </div>
          <div className={`${ResultsCSS.detailsContainer}`}>
            <div
              className={`${ResultsCSS.lineContainer} ${ResultsCSS.title} ${ResultsCSS.red}`}
            >
              <Link to={`/${result.title ? "movie" : "tv"}/${result.id}`}>
                {result.title || result.name}
              </Link>
            </div>
            <div
              className={`${ResultsCSS.lineContainer} ${ResultsCSS.description}`}
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
    </>
  );
};

export default Results;
