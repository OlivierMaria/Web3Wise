import React, { useEffect } from "react";
import "./project.css";
import { Feature } from "../../components/index.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Web3() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="web3wise__project section__margin" data-aos="fade-left">
      <div className="web3wise__project-feature">
        <Feature
          title=" Façonnant l'Avenir de l'Internet"
          text="Les projets du Web3 sont des initiatives innovantes qui exploitent la puissance de la technologie blockchain pour réinventer Internet. Ces projets visent à créer un Internet plus décentralisé, où les utilisateurs ont le contrôle sur leurs données, les transactions sont transparentes, et la confiance est au cœur de chaque interaction. En utilisant des contrats intelligents, des tokens, et des réseaux décentralisés, le Web3 offre un aperçu passionnant de l'Internet du futur."
        />
      </div>
      <div className="web3wise__project-heading">
        <h2>Projets Transcendants Qui Redéfinissent l'Internet</h2>
        <p>Explorez davantage grâce à nos articles informatifs.</p>
      </div>
      <div className="web3wise__project-container">
        <Feature
          title="Ethereum (ETH)"
          text="Ethereum est une plateforme blockchain de premier plan qui a ouvert la voie à la création de contrats intelligents. Les contrats intelligents sont des programmes autonomes qui s'exécutent sur la blockchain, permettant des applications décentralisées (DApps) dans divers domaines, de la finance décentralisée (DeFi) aux jeux en ligne."
        />
        <Feature
          title="
Fantom (FTM)"
          text="Fantom est une blockchain publique décentralisée axée sur la scalabilité élevée, les contrats intelligents et un réseau économique appelé Fantom Opera. Elle offre des performances rapides, adaptées aux applications réactives, tout en soutenant l'innovation des DApps. Fantom favorise également l'interopérabilité, permettant des échanges transparents d'actifs et de données entre différentes blockchains. Fantom gagne en popularité dans l'écosystème de la blockchain."
        />
        <Feature
          title="Chainlink (LINK) "
          text="Chainlink est un réseau de l'oracle qui permet de connecter des contrats intelligents à des données du monde réel, comme des informations météorologiques ou des taux de change. Cela ouvre de nombreuses possibilités pour les contrats intelligents en leur permettant de réagir aux données du monde réel de manière autonome."
        />
      </div>
    </div>
  );
}

export default Web3;
