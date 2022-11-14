import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Components/Common/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Products";
import AboutPage from "./Pages/About";
import { ProductDetail } from "./Components/Common/Products/ProductDetail";
import { Footer } from "./Components/Common/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
