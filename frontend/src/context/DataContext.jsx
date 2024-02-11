import { createContext, useState, useEffect } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [watchlist, setWatchlist] = useState([]);
  const [inWatchlist, setInWatchlist] = useState();
  const [reload, setReload] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [findBy, setFindBy] = useState("all");
  const [orderBy, setOrderBy] = useState("dateAdded");
  const [sorted, setSorted] = useState([]);
  const [itemStatus, setItemStatus] = useState();
  const [itemCurrentEp, setItemCurrentEp] = useState();
  const [itemMyRating, setItemMyRating] = useState();
  const [itemDateFinished, setItemDateFinished] = useState();
  const [alertMessage, setAlertMessage] = useState();

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
        filtered,
        setFiltered,
        filterBy,
        setFilterBy,
        findBy,
        setFindBy,
        orderBy,
        setOrderBy,
        sorted,
        setSorted,
        itemStatus,
        setItemStatus,
        itemCurrentEp,
        setItemCurrentEp,
        itemMyRating,
        setItemMyRating,
        itemDateFinished,
        setItemDateFinished,
        alertMessage,
        setAlertMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
