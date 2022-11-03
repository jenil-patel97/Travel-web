import React from "react";
import Destination from "./components/Destination";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Gallary />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
