import React from "react";
import "../../assets/articleAssets/articlepage.scss";
import "../../assets/articleAssets/tags.scss";
import PropTypes from "prop-types";

const dateFormat = require("dateformat");
const ViewAllArticlesUnderTag = ({ results }) => {
  const showArticles = results.map(article => (
    <div className="article-column" key={article.slug}>
      <a href={`/view-article/${article.slug}`} rel="bookmark">
        <img id="article_img" src={article.image} alt="" />
      </a>
      <div className="entry-info">
        <br />
        <header className="entry-header">
          <h3 className="entry-title">
            <a href={`/view-article/${article.slug}`} rel="bookmark">
              {article.title}
            </a>
          </h3>
        </header>
        <div className="entry-meta">
          <h5 className="entry-description">
            <span>{article.description}</span>
          </h5>
          <div>
            <a className="categories" href="/">
              {dateFormat(article.created_at, "d/mmm/yyyy")}
            </a>
          </div>
          <br />
        </div>
        <br />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="pic-container">{showArticles}</div>
    </div>
  );
};

ViewAllArticlesUnderTag.propTypes = {
  results: PropTypes.array
};

export default ViewAllArticlesUnderTag;
