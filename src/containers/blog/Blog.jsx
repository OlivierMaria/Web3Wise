import React from "react";
import "./blog.css";
import Article from "../../components/article/Article.jsx";
import { blog01, blog02, blog03, blog04, blog05 } from "./import.js";

function Blog() {
  return (
    <div className="web3wise__blog section__padding" id="article">
      <div className="web3wise__blog-heading">
        <h3>
          Articles Connexes pour Approfondir votre Compréhension du Web 3.0
        </h3>
      </div>
      <div className="web3wise__blog-container">
        <div className="web3wise__blog-container_groupA">
          <Article
            imgUrl={blog01}
            title="NFT : PROJET DE LOI JONUM, LES JEUX WEB3 EN DANGER ?"
            links="https://journalducoin.com/defi/loi-jonum-jeux-web3-danger/"
          />
        </div>
        <div className="web3wise__blog-container_groupB">
          <Article
            imgUrl={blog02}
            title="BITCOIN STABILISE À 34 000 DOLLARS, LES CRYPTOMONNAIES SUIVENT LE MOUVEMENT"
            links="https://journalducoin.com/trading/bitcoin-stabilise-34-000-dollars-cryptomonnaies-suivent-mouvement/"
          />
          <Article
            imgUrl={blog03}
            title="LE PREMIER ATM BITCOIN A 10 ANS, RETOUR SUR UNE RÉVOLUTION DISCRÈTE"
            links="https://journalducoin.com/bitcoin/le-premier-atm-bitcoin-a-10-ans-retour-sur-une-revolution-discrete/"
          />
          <Article
            imgUrl={blog04}
            title="STAKING REWARDS : ANTICIPER ET OPTIMISER SES GAINS DE STAKING"
            links="https://journalducoin.com/defi/staking-rewards-anticiper-et-optimiser-ses-gains-de-staking/"
          />
          <Article
            imgUrl={blog05}
            title="LE GOUVERNEMENT US DÉNONCE (ENCORE) LES ACTIVITÉ ILLICITES LIÉES AUX CRYPTOS"
            links="https://journalducoin.com/bitcoin/gouvernement-us-denonce-encore-activite-illicites-liees-cryptos/"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
