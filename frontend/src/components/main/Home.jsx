import React from "react";
import { useEffect } from "react";
import HeroCSS from "../../styles/Hero.module.css";
import TrendingMovies from "../../api/TrendingMovies";
import TrendingTVShows from "../../api/TrendingTVShows";
import PopularMovies from "../../api/PopularMovies";
import PopularTVShows from "../../api/PopularTVShows";

const Home = () => {
  useEffect(() => {
    document.title = "Popcorn";
  }, []);

  return (
    <div className={`${HeroCSS.heroContainer}`}>
      <TrendingMovies />
      <hr />
      <TrendingTVShows />
      <hr />
      <PopularMovies />
      <hr />
      <PopularTVShows />
    </div>
  );
};

export default Home;
