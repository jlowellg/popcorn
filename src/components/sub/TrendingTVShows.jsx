import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import HomepageCSS from "../../styles/Homepage.module.css";

const TrendingTVShows = () => {
  const { trendingTVShows } = useContext(DataContext);
  return (
    <div>
      <div className={`${HomepageCSS.labelContainer} ${HomepageCSS.label}`}>
        Trending TV Shows
      </div>
      <div className={`${HomepageCSS.listMainContainer}`}>
        {trendingTVShows.map((trendingTVShow) => (
          <div
            className={`${HomepageCSS.listSubContainer}`}
            key={trendingTVShow.id}
          >
            <div className={`${HomepageCSS.posterContainer}`}>
              <img
                className={`${HomepageCSS.poster}`}
                src={`https://image.tmdb.org/t/p/original${trendingTVShow.poster_path}`}
              />
            </div>
            <div
              className={`${HomepageCSS.titleContainer} ${HomepageCSS.title}`}
            >
              {trendingTVShow.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTVShows;
