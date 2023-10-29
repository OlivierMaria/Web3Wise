import React from "react";
import { Header, Footer, Technology, What, Project, Blog } from "./containers";
import { Navbar, Brand } from "./components";
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
      <Technology />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
