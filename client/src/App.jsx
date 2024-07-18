import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Ticket from "./pages/Ticket";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import LoginSignup from "./pages/LoginSignup";
import LogSign from "./pages/LogSign";

function App() {
  // true means login page is  active

  const [loginStatus, setLoginStatus] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <>
      {/* <div
        className={`slide ${isOpen ? "active" : "hidden"}`}
        onClick={handleIconClick}
      >
        X
      </div>
      <div
        className={`slide ${!isOpen ? "active" : "hidden"}`}
        onClick={handleIconClick}
      >
        |||
      </div> */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop/:_id" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path={loginStatus ? "login" : "signup"} element={<LogSign />} />
      </Routes>
    </>
  );
}

export default App;
