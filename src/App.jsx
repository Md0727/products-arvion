import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arvion from "./pages/products/arvion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/interview-task" element={<Arvion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
