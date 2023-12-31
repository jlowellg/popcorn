import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import HeroCSS from "../styles/Hero.module.css";

const MovieInfo = () => {
  const { movieInfo, genres } = useContext(DataContext);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
      }}
      className={`${HeroCSS.backdropContainer}`}
    >
      <div className={`${HeroCSS.heroContainer}`}>
        <div className={`${HeroCSS.mainContainer}`}>
          <div className={`${HeroCSS.posterContainer}`}>
            <img
              className={`${HeroCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
            />
          </div>
          <div className={`${HeroCSS.detailsContainer}`}>
            <div className={` ${HeroCSS.largeTitle} ${HeroCSS.red}`}>
              {movieInfo.title}
            </div>
            <div>
              <div className={`${HeroCSS.title}`}>Overview</div>
              <div className={`${HeroCSS.normalText}`}>
                {movieInfo.overview}
              </div>
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
              <div className={`${HeroCSS.gray}`}>{movieInfo.release_date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
