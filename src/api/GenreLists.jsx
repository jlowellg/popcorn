import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GenreLists = ({ genre_ids }) => {
  const [movieGenreLists, setMovieGenreLists] = useState([]);
  const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const key = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjVmMjgzY2M5NGY4MjA3YTRjODYwMWQ3NWYwMzZmNSIsInN1YiI6IjY1N2VjNWYzMzIzZWJhMzY0OTg3YTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VsTqRQTrv_LllZfSlBiNQm_2sYM28RvgnaQq_PXeuk",
    },
  };

  useEffect(() => {
    const fetchGenreLists = async () => {
      try {
        const response = await axios.get(genreUrl, key);
        setMovieGenreLists(response.data.genres);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchGenreLists();
  }, []);

  const genres = movieGenreLists;
  const movieGenres = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <>
      {movieGenres.map((genre) => (
        <div key={genre.id}>{genre.name} |</div>
      ))}
    </>
  );
};

export default GenreLists;
