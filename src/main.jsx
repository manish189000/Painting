import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./Components/Hero.jsx";
// import Next from "./Components/Next.jsx";
import About from "./Components/About.jsx";
import Grid from "./Components/Grid.jsx";
import Testmonial from "./Components/Testmonial.jsx";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Hero />
    <About />
    <Grid />
    <Testmonial />
    <Footer />
    {/* <Next /> */}
  </React.StrictMode>
);
