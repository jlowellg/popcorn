import React from "react";
import HomeCSS from "../styles/Home.module.css";
import MovieLists from "../api/MovieLists";

const Home = () => {
  return (
    <div className={`${HomeCSS.homeContainer}`}>
      <MovieLists />
    </div>
  );
};

export default Home;
