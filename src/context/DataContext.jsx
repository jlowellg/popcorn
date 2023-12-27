import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState("multi");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  return (
    <DataContext.Provider
      value={{
        query,
        setQuery,
        category,
        setCategory,
        results,
        setResults,
        trendingMovies,
        setTrendingMovies,
        trendingTVShows,
        setTrendingTVShows,
        popularMovies,
        setPopularMovies,
        popularTVShows,
        setPopularTVShows,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

/*category == "movies"
        ? setUrl(`https://api.themoviedb.org/3/search/movie?query=${search}`)
        : category == "tv-shows"
        ? setUrl(`https://api.themoviedb.org/3/search/tv?query=${search}`)
        : setUrl(`https://api.themoviedb.org/3/search/multi?query=${search}`);*/
