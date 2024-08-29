import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  TopBar,
  Slider,
  Destacados,
  ProductList,
  TestGrid,
} from "./components";
import { HomePage, AboutPage, ServicesPage, ContactPage } from "./pages";
import { products } from "./data/products";

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <TestGrid />
      {/* Contenedor para las rutas */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Slider />
              <Destacados products={products} />
              <ProductList products={products} />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
