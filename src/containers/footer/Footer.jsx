import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";

function Footer() {
  return (
    <div className="web3wise__footer">
      <img src={logo} alt="logo" />
      <p>
        Intéressé par mon travail dans le domaine du Web ? N'hésitez pas à me
        contacter pour discuter de projets passionnants ou pour en savoir plus
        sur mes compétences.
      </p>
      <div className="web3wise__footer-icon section__padding">
        <a
          href="https://github.com/OlivierMaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="web3wise__icons-footer" />
        </a>
        <a
          href="https://www.linkedin.com/in/oliviermaria09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="web3wise__icons-footer" />
        </a>
        <a
          href="mailto:olivier-maria@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMessage className="web3wise__icons-footer" />
        </a>
        <a
          href="https://maria-olivier-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineComputer className="web3wise__icons-footer" />
        </a>
      </div>
      <div className="web3wise__footer-bottom">
        <p>© 2023 Web3Wise. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default Footer;
