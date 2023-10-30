import React from "react";
import "./article.css";

const Article = ({ imgUrl, title }) => {
  return (
    <div className="web3wise__blog-container_article">
      <div className="web3wise__blog-container_article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="web3wise__blog-container_article-content">
        <div>
          <h4>{title}</h4>
        </div>
        <p>Voir l'article complet</p>
      </div>
    </div>
  );
};

export default Article;
