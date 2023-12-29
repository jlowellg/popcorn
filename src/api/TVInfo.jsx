import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import HeroCSS from "../styles/Hero.module.css";

const TVInfo = () => {
  const { TVInfo, genres } = useContext(DataContext);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${TVInfo.backdrop_path})`,
      }}
      className={`${HeroCSS.backdropContainer}`}
    >
      <div className={`${HeroCSS.heroContainer}`}>
        <div className={`${HeroCSS.mainContainer}`}>
          <div className={`${HeroCSS.posterContainer}`}>
            <img
              className={`${HeroCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${TVInfo.poster_path}`}
            />
          </div>
          <div className={`${HeroCSS.detailsContainer}`}>
            <div className={` ${HeroCSS.title} ${HeroCSS.red}`}>
              {TVInfo.name}
            </div>
            <div>
              <div className={`${HeroCSS.title}`}>Overview</div>
              <div className={`${HeroCSS.normalText}`}>{TVInfo.overview}</div>
            </div>
            <div
              className={`${HeroCSS.title} ${HeroCSS.gray} ${HeroCSS.lineContainer}`}
            >
              {genres.map((genre, index) => (
                <div key={genre.id}>
                  {genre.name} {index !== genres.length - 1 ? "|" : null}
                </div>
              ))}
            </div>
            <div className={`${HeroCSS.title} ${HeroCSS.lineContainer}`}>
              <div>Release Date:</div>
              <div className={`${HeroCSS.gray}`}>{TVInfo.first_air_date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVInfo;
