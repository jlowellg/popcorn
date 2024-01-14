import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/main/NavBar";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import { DataProvider } from "./context/DataContext";
import { KeyProvider } from "./context/KeyContext";
import SearchResults from "./api/SearchResults";
import GetMovieInfo from "./api/GetMovieInfo";
import GetTVInfo from "./api/GetTVInfo";
import LoginPage from "./components/main/LoginPage";
import GetWatchlist from "./api/GetWatchlist";
import RegisterPage from "./components/main/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DataProvider>
          <NavBar />
          <KeyProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<SearchResults />} />
              <Route path="/movie/:id" element={<GetMovieInfo />} />
              <Route path="/tv/:id" element={<GetTVInfo />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/watchlist" element={<GetWatchlist />} />
            </Routes>
          </KeyProvider>
          <Footer />
        </DataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
