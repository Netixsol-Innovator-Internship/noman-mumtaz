// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeaLandingPage from "./pages/TeaLandingPage";
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<TeaLandingPage />} />

        {/* Collections */}
        <Route
          path="/collections/:collectionName"
          element={<CollectionsPage />}
        />

        {/* Product Details (with dynamic :id) */}
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* Shopping Bag */}
        <Route path="/bag" element={<ShoppingBagPage />} />



        {/* Catch-all for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
