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
  const [movieInfo, setMovieInfo] = useState([]);
  const [TVInfo, setTVInfo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const [inWatchlist, setInWatchlist] = useState();
  const [reload, setReload] = useState(false);
  const [ascending, setAscending] = useState(false);

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
        movieInfo,
        setMovieInfo,
        TVInfo,
        setTVInfo,
        genres,
        setGenres,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        watchlist,
        setWatchlist,
        inWatchlist,
        setInWatchlist,
        reload,
        setReload,
        ascending,
        setAscending,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
