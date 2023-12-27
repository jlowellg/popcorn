import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import HomepageCSS from "../../styles/Homepage.module.css";

const PopularMovies = () => {
  const { popularMovies } = useContext(DataContext);
  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Popular Movies
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {popularMovies.map((popularMovie) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={popularMovie.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${popularMovie.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              {popularMovie.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
