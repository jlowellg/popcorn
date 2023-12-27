import { useContext, useEffect } from "react";
import HeroCSS from "../styles/Hero.module.css";
import GenreLists from "./GenreLists";
import DataContext from "../context/DataContext";

const Popular = () => {
  const { movies, search } = useContext(DataContext);

  return (
    <div className={`${HeroCSS.heroContainer}`}>
      {movies.map((movie) => (
        <div className={`${HeroCSS.mainContainer}`} key={movie.id}>
          <div className={`${HeroCSS.posterContainer}`}>
            <img
              className={` ${HeroCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </div>
          <div className={`${HeroCSS.detailsContainer}`}>
            <div className={`${HeroCSS.lineContainer}`}>
              <div className={`${HeroCSS.title}`}>Title:</div>
              <div className={`${HeroCSS.title} ${HeroCSS.red}`}>
                {movie.title || movie.name}
              </div>
            </div>
            <div className={`${HeroCSS.lineContainer}`}>
              <div className={`${HeroCSS.title}`}>Release Date:</div>
              <div className={`${HeroCSS.title} ${HeroCSS.gray}`}>
                {movie.release_date}
              </div>
            </div>
            <hr />
            <div className={`${HeroCSS.title}`}>Overview:</div>
            <div className={`${HeroCSS.description}`}>{movie.overview}</div>
            <hr />
            <div className={`${HeroCSS.lineContainer}`}>
              <div className={`${HeroCSS.title}`}>Genre:</div>
              <div
                className={`${HeroCSS.lineContainer} ${HeroCSS.title} ${HeroCSS.gray}`}
              >
                <GenreLists genre_ids={`${movie.genre_ids}`} />
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
