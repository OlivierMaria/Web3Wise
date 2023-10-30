import React, { useEffect } from "react";
import { Header, Footer, Technology, What, Project, Blog } from "./containers";
import { Navbar, Brand } from "./components";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Swal from "sweetalert2";

const App = () => {
  const { scrollYProgress } = useScroll();
  const Swal = require("sweetalert2");

  const showAlert = () => {
    Swal.fire({
      title: "Ce projet vous plaît ? Contactez-moi.",
      width: 750,
      padding: "3em",
      customClass: {
        title: "my-title-class",
        content: "my-content-class",
        flexColumn: "my-flex-column-class",
      },
      background: "black",
      color: "white",
      html: `
        <div class="my-custom-alert">
          <div class="web3wise__header-content__input my-flex-column-class">
            <input type="email" placeholder="Votre email" />
            <button type="button">Contact</button>
          </div>
        </div>
      `,
      position: "bottom-end",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
