import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import HomepageCSS from "../../styles/Homepage.module.css";

const PopularTVShows = () => {
  const { popularTVShows } = useContext(DataContext);
  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Popular TV Shows
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {popularTVShows.map((popularTVShow) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={popularTVShow.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${popularTVShow.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              {popularTVShow.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTVShows;
