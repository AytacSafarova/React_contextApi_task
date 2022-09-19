import "../src/App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ProductList from "./pages/productList/productList";
import { ProductProvider } from "./pages/productContext/productContext";
import ProductBasket from "./pages/productBasket/productBasket";
import ProductDetail from "./pages/productDetail/productDetail";



function App() {
  return (
    <ProductProvider>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="link" to="/basket">
              Basket
            </Link>
          </li>
          <li>
            <Link className="link" to="/detail">
              detail{" "}
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/list" element={<ProductList />} />
        <Route path="/basket" element={<ProductBasket />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
