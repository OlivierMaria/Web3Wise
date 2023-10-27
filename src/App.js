import React from "react";
import {
  Header,
  Footer,
  Possibility,
  Features,
  Web3,
  Blog,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Web3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
