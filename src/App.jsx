import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Shop from "./pages/Shop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header/Header";
import Book from "./pages/Book";
import CartPage from "./pages/CartPage";
import WishlistPage from "./components/wishlistpage/WishList";
import Footer from "./components/Footer/Footer";

export default function App() {
  const hideNavbarPaths = ["/login", "/register"];
  const hidefooterPaths = [ "/login " , "/register" , "/cart" , "/wishlist" , "/book/:bookId" ]
  return (
    <div>
      <BrowserRouter>
        {!hideNavbarPaths.includes(location.pathname) && <Header />}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Home" element={<HomePage />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        {!hidefooterPaths.includes(location.pathname) && <Footer />}
      </BrowserRouter>
    </div>
  );
}
