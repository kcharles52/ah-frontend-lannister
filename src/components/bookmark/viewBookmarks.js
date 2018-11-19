import React, { Component } from "react";
import { connect } from "react-redux";
import { getBookmarks } from "../../actions/bookmark/bookmarkActions";
import PropTypes from "prop-types";
import BookmarkedArticleView from "../../views/bookmark/bookmarkArticleView";

class viewBookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
  }

  componentWillMount() {
    let bookmarks = this.props.dispatch(getBookmarks());
    this.setState({bookmarks:bookmarks});
  }
  render() {
    return <BookmarkedArticleView bookmarks={this.props.bookmark}/>;
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

function mapStateToProps(state) {
  return {
    bookmark: state.bookmarkReducer.bookmark
  };
}

viewBookmarks.propTypes = {
  dispatch: PropTypes.func,
  bookmark:PropTypes.array
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(viewBookmarks);
