import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import MyOrder from "./pages/MyOrder";
import Deatils from "./pages/detail/Details";
import Home from "./pages/detail/Home";

const products = [
  {
    id: 1,
    title: "Products",
  },
  {
    id: 2,
    title: "Products ",
  },
  {
    id: 3,
    title: "Products",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products products={products} />} />

          <Route
            path="products/:id/details"
            element={<Deatils products={products} />}
          />

          <Route path="/myCart" element={<MyCart />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
