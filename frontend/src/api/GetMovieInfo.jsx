import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import DataContext from "../context/DataContext";
import KeyContext from "../context/KeyContext";
import HeroCSS from "../styles/Hero.module.css";
import MovieInfo from "./MovieInfo";

const GetMovieInfo = () => {
  const { setMovieInfo, setGenres, isLoading, setIsLoading } =
    useContext(DataContext);
  const { key } = useContext(KeyContext);
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}`;

  useEffect(() => {
    const fetchMovieInfo = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, key);
        setMovieInfo(response.data);
        setGenres(response.data.genres);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`${HeroCSS.loading}`}>Loading...</div>
      ) : (
        <MovieInfo />
      )}
    </>
  );
};

export default GetMovieInfo;
