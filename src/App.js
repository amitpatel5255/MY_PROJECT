import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
// import { createBrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/Pages/Shop";
import Cart from "../src/Pages/Cart";
import Loginsignup from "./Pages/Loginsignup";
import Shopcategory from "./Pages/Shopcategory";
import Product from "../src/Pages/Product";
import Footer from "../src/Component/Footer/Footer";
import men_banner from "../src/Component/Assets/banner_mens.png";
import women_banner from "../src/Component/Assets/banner_women.png";
import kid_banner from "../src/Component/Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Shopcategory banner={men_banner} category="men" />}/>
          <Route path="/women" element={<Shopcategory banner={women_banner} category="women" />}/>
          <Route path="/kid" element={<Shopcategory banner={kid_banner} category="kid" />}/>
          <Route path="/Product/:id" element={<Product />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
