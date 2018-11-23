import React from "react";
import NavBar from "../../components/navigation/navBar";
import SideBarAction from "./sideBar";
import "../../assets/articleAssets/articlepage.scss";
import PropTypes from "prop-types";
import { roundofftime } from "./roundOffTime";
import { favorite } from "../../assets/articleAssets/svgIcons";
import Rating from "../../components/articles/rating";
import Like from "../../components/articles/LikeDislike";
import { Link } from "react-router-dom";
import "../../assets/articleAssets/tags.scss";

const dateFormat = require("dateformat");
const ViewOneArticle = ({ article, emailShare, handleEmail, selected }) => {
  const roundUp = roundofftime(article);
  return (
    <div>
      <NavBar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-xs-12">
            <SideBarAction
              data={article}
              readtime={roundUp}
              emailShare={emailShare}
              handleEmail={handleEmail}
            />
          </div>
          <div className="col-md-10 col-xs-12">
            <div className="center">
              <h1 className="posttitle">{article.title} </h1>
              <h4>
                {article.description} {"  "}
                <br />
                <a className="categories" href="/">
                  {article.category_title}
                </a>
                {"    "}
                <a className="readtime" href="#comments">
                  {dateFormat(roundUp, "M")} min read
                </a>
                {"    "}
                <span className="readtime"> By {article.author} </span>
                <span className="readtime">
                  On {dateFormat(article.created_at, "d mmm")}
                </span>
              </h4>
              <br />
              <h2>
                <img
                  className="featured-image img-fluid"
                  id="article_image"
                  src={article.image}
                  alt=""
                />
              </h2>
            </div>
            <br />
            <div className="article-post">
              <div
                dangerouslySetInnerHTML={{ __html: article.body }}
                onClick={selected}
              />
            </div>
            <div className="entry-meta">
              <div className="after-post-tags">
                <ul className="tags" >
                  {!article.tags ? "" : article.tags.map(tag => (
                    
                    <Link to={`/view-articles-under-tag/${tag}`} key={tag}>
                      <li className="d-inline tag-name"
                        value={tag}>
                        {tag}
                      </li>
                    </Link>
                  
                  ))}

                </ul>
              </div>
            </div>
          </div>
          <div className="sideBarRight col-md-1 col-xs-12">
            <div>
              <span id="share_text">React</span>
            </div>
            <Like disliking={article.dislikes} liking={article.likes} />
            <Rating rating={article.average_rating} />
            <a href="#comments">{article.favorites_count}</a>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M24 24H0V0h24v24z" />
              <path d={favorite} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
ViewOneArticle.propTypes = {
  article: PropTypes.object,
  emailShare: PropTypes.func,
  handleEmail: PropTypes.func,
  selected: PropTypes.func
};

export default ViewOneArticle;
