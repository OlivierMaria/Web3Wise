import React from "react";
import "./header.css";
import Web3 from "../../assets/web3.png";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";

function Header() {
  return (
    <div className="web3wise__header section__padding">
      <div className="web3wise__header-content">
        <h1>Le Web3 : L'Avenir Décentralisé d'Internet</h1>
        <p>
          Bienvenue dans l'ère révolutionnaire du Web3. Alors que le Web
          traditionnel a été le socle de l'Internet pendant des décennies, le
          Web3 se lève en tant que pionnier de l'avenir. Il promet une
          transformation radicale en remettant le contrôle aux mains des
          utilisateurs.
        </p>

        <div className="web3wise__icons-wrapper">
          <a
            href="https://github.com/OlivierMaria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="web3wise__icons-custom" />
          </a>
          <a
            href="https://www.linkedin.com/in/oliviermaria09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="web3wise__icons-custom" />
          </a>
          <a
            href="mailto:olivier-maria@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMessage className="web3wise__icons-custom" />
          </a>
          <a
            href="https://maria-olivier-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineComputer className="web3wise__icons-custom" />
          </a>
        </div>
      </div>
      <motion.div
        className="web3wise__header-image"
        animate={{ rotate: [0, 360], opacity: 1, scale: 0.8 }}
        transition={{
          duration: 5,
          delay: 0.2,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 0.7 }}
      >
        <img src={Web3} alt="" />
      </motion.div>
    </div>
  );
}

export default Header;
