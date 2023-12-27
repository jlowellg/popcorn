import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import HomepageCSS from "../../styles/Homepage.module.css";

const TrendingMovies = () => {
  const { trendingMovies } = useContext(DataContext);
  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Trending Movies
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {trendingMovies.map((trendingMovie) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={trendingMovie.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${trendingMovie.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              {trendingMovie.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
