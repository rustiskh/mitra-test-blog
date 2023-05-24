import React from "react";
import { Route, Routes } from "react-router-dom";


import Header from "./components/global/Header";
import Catalog from "./pages/catalog/Catalog";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
