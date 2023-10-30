import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="web3wise__navbar">
      <div className="web3wise__navbar-links">
        <div className="web3wise__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="web3wise__navbar-links_container">
          <p>
            <a href="#">Accueil</a>
          </p>
          <p>
            <a href="#what">Le Web3, qu'est-ce que c'est ?</a>
          </p>
          <p>
            <a href="#project">Projets Web3</a>
          </p>
          <p>
            <a href="#techno">Technologies Web3</a>
          </p>
          <p>
            <a href="#article">Actualités Web3</a>
          </p>
        </div>
      </div>
      <div className="web3wise__navbar-menu ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="web3wise__navbar-menu_container bounce-in-top">
            <div className="web3wise_navbar-menu_container-links">
              <p>
                <a href="#">Accueil</a>
              </p>
              <p>
                <a href="#what">Le Web3, qu'est-ce que c'est ?</a>
              </p>
              <p>
                <a href="#project">Projets Web3</a>
              </p>
              <p>
                <a href="#techno">Technologies Web3</a>
              </p>
              <p>
                <a href="#article">Actualités Web3</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
