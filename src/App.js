import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Products";
import AboutPage from "./Pages/About";
import { Footer } from "./Components/Common/Footer/Footer";
import { Navigation } from "./Components/Common/Navigation/Navigation";
import { Cart } from "./Components/Products/Cart/Cart";
import { ProductDetail } from "./Components/Products/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Navigate to="/products/all" />} />
        <Route path="/products/:type" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
