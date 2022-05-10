import React from "react";
import "./App.css";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="products" element={<Products />} /> */}
      </Routes>
    </>
  );
}

export default App;
