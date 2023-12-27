import React from "react";
import HeroCSS from "../../styles/Hero.module.css";
import GetTrendingMovies from "../../api/GetTrendingMovies";
import GetTrendingTVShows from "../../api/GetTrendingTVShows";
import GetPopularMovies from "../../api/GetPopularMovies";
import GetPopularTVShows from "../../api/GetPopularTVShows";

const Home = () => {
  return (
    <div className={`${HeroCSS.heroContainer}`}>
      <GetTrendingMovies />
      <hr />
      <GetTrendingTVShows />
      <hr />
      <GetPopularMovies />
      <hr />
      <GetPopularTVShows />
    </div>
  );
};

export default Home;
