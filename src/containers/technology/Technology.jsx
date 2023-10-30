import React, { useEffect } from "react";
import "./technology.css";
import TechnologyImage from "../../assets/techno.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Technology() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="web3wise__technology section__padding" id="techno">
      <div data-aos="fade-left" className="web3wise__technology-image">
        <img src={TechnologyImage} alt="Technology" />
      </div>
      <div className="web3wise__technology-content">
        <h3>Acteurs Clés du Web 3.0</h3>
        <p>
          Le Web 3.0 est façonné par un groupe diversifié d'acteurs. Les
          développeurs et ingénieurs créent des applications décentralisées et
          des technologies blockchain. La communauté blockchain, composée de
          développeurs, de mineurs et d'enthousiastes, contribue activement à
          son évolution. Les experts en sécurité informatique veillent à sa
          fiabilité, et les régulateurs cherchent à établir un cadre
          réglementaire adapté. Ensemble, ces acteurs jouent un rôle central
          dans la concrétisation de la vision du Web 3.0.
        </p>
      </div>
    </div>
  );
}

export default Technology;
