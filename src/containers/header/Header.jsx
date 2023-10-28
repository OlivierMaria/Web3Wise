import React from "react";
import "./header.css";
import People from "../../assets/people.png";
import Web3 from "../../assets/web3.png";

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

        <div className="web3wise__header-content__input">
          <input type="email" placeholder="Votre email" />
          <button type="button">Newsletter</button>
        </div>
        <div className="web3wise__header-content__people">
          <img src={People} alt="" />
          <p>1,000 personne s'interesse au sujet, tu en fait partie ?</p>
        </div>
      </div>
      <div className="web3wise__header-image">
        <img src={Web3} alt="" />
      </div>
    </div>
  );
}

export default Header;
