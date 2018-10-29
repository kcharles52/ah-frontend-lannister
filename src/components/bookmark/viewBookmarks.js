import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getBookmarks,
  unBookmarkArticle
} from "../../actions/bookmark/bookmarkActions";
import PropTypes from "prop-types";
import BookmarkedArticleView from "../../views/bookmark/bookmarkArticleView";

export class ViewBookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: [],
      unbookmarked:[]
    };
  }

  componentWillMount() {
    this.props.dispatch(getBookmarks());
  }
  componentWillUpdate(nextProps) {
    let current = nextProps.unbookmarked;
    let prev = this.props.unbookmarked;

    if (current.length !== prev.length) {
      this.props.dispatch(getBookmarks());
    }
  }
  unBookmarkArticles = slug => {
    this.props.dispatch(unBookmarkArticle(slug));
  };

  render() {
    return (
      <BookmarkedArticleView
        bookmarks={this.props.bookmark}
        unBookmarkArticle={this.unBookmarkArticles}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

function mapStateToProps(state) {
  return {
    bookmark: state.bookmarkReducer.bookmark,
    unbookmarked: state.bookmarkReducer.unbookmarked,

  };
}

ViewBookmarks.propTypes = {
  dispatch: PropTypes.func,
  unBookmarkArticles: PropTypes.func,
  bookmark: PropTypes.array,
  unbookmarked: PropTypes.array
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBookmarks);
