import React, { Component } from "react";
import { connect } from "react-redux";
import {
  bookmarkArticle
} from "../../actions/bookmark/bookmarkActions";
import PropTypes from "prop-types";
import SVG from "./svg";

export class BookmarkArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: {}
    };
  }

  handleBookMark = () => {
    this.props.dispatch(bookmarkArticle(this.props.slug));
  };

  render() {
    return (
      <div>
        <SVG handlebookmark={this.handleBookMark} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

const mapStateToProps = state => ({
  slug: state.articlesReducer.onearticle.slug,
  bookmark: state.bookmarkReducer.bookmark
});

BookmarkArticle.propTypes = {
  slug: PropTypes.string,
  dispatch: PropTypes.func,
  bookmark: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkArticle);
