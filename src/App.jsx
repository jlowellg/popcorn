import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/main/NavBar";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import { DataProvider } from "./context/DataContext";
import { KeyProvider } from "./context/KeyContext";
import GetSearchResults from "./api/GetSearchResults";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DataProvider>
          <NavBar />
          <KeyProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<GetSearchResults />} />
            </Routes>
          </KeyProvider>
          <Footer />
        </DataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
