import React from "react";
import { Header, Footer, Technology, What, Project, Blog } from "./containers";
import { Navbar, Brand } from "./components";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />
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
