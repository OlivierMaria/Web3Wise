import React from "react";
import "./article.css";

const Article = ({ imgUrl, title, links }) => {
  return (
    <div className="web3wise__blog-container_article">
      <div className="web3wise__blog-container_article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="web3wise__blog-container_article-content">
        <div>
          <h4>{title}</h4>
        </div>
        <a href={links} target="_blank" rel="noreferrer">
          <p>Voir l'article complet</p>
        </a>
      </div>
    </div>
  );
};

export default Article;
