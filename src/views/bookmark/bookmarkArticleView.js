import React, { Fragment } from "react";
import NavBar from "../../components/navigation/navBar";
import PropTypes from "prop-types";
import { Media } from "reactstrap";

const BookmarksView = ({ bookmarks, unBookmarkArticle }) => {
  let ShowBookmarks = bookmarks.map(bookmark => (
    <div className="bookmark" key={bookmark.slug}>
      <div className="bookmarkedArticle">
        <Media
          object
          src={bookmark.image}
          data-src="holder.js/80x80"
          alt="image"
          className="ArticleImage"
        />
        <div className="titleDiscription">
          <a href={`/view-article/${bookmark.slug}`}>
            <h3>{bookmark.article_title}</h3>
          </a>
          <p>{bookmark.description} ...</p>
        </div>
        <div className="dateRead">
          <div className="articleAuthor dtTab">{bookmark.author}</div>
        </div>
      </div>
      <div className="removeLink">
        <span
          onClick={() => {
            unBookmarkArticle(bookmark.slug);
          }}
        >
          {"Remove"}
        </span>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <NavBar />
      <div className="bookmarks">
        <div className="header">
          <h1>Bookmarks</h1>
        </div>
        {ShowBookmarks}
      </div>
    </Fragment>
  );
};

BookmarksView.propTypes = {
  bookmarks: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  publicationDate: PropTypes.string,
  readTime: PropTypes.string,
  unBookmarkArticle: PropTypes.func
};

export default BookmarksView;
