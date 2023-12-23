import HomeCSS from "../styles/Home.module.css";
import GenreLists from "./GenreLists";

const Popular = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div className={`${HomeCSS.mainContainer}`} key={movie.id}>
          <div className={`${HomeCSS.posterContainer}`}>
            <img
              className={` ${HomeCSS.poster}`}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </div>
          <div className={`${HomeCSS.detailsContainer}`}>
            <div className={`${HomeCSS.lineContainer}`}>
              <div className={`${HomeCSS.title}`}>Title:</div>
              <div className={`${HomeCSS.title} ${HomeCSS.red}`}>
                {movie.title}
              </div>
            </div>
            <hr />
            <div className={`${HomeCSS.title}`}>Overview:</div>
            <div className={`${HomeCSS.description}`}>{movie.overview}</div>
            <hr />
            <div className={`${HomeCSS.lineContainer}`}>
              <div className={`${HomeCSS.title}`}>Genre:</div>
              <div
                className={`${HomeCSS.lineContainer} ${HomeCSS.title} ${HomeCSS.gray}`}
              >
                <GenreLists genre_ids={`${movie.genre_ids}`} />
              </div>
            </div>
            <hr />
            <div className={`${HomeCSS.lineContainer}`}>
              <div className={`${HomeCSS.title}`}>Release Date:</div>
              <div className={`${HomeCSS.description}`}>
                {movie.release_date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Popular;
