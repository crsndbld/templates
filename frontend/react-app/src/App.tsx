import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ItemList from "./pages/ItemListArea";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ItemList" element={<ItemList />} />
      </Routes>
    </div>
  );
}

export default App;
