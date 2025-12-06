import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arvion from "./pages/products/arvion";

function App() {
  return (
    <BrowserRouter basename="/products-arvion/">
      <Routes>
        <Route path="/" element={<Arvion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
