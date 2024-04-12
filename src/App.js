import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetails} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default React.memo(App);
