import React from "react";
import { Header, Footer, Possibility, What, Project, Blog } from "./containers";
import { Navbar, Brand, CTA } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Project />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
