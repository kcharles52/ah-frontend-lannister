import React, { Fragment, Component } from "react";
import CommentCard from "../../views/commentsViews/commentsCard";
import getComments, {
  deleteComment
} from "../../actions/commentActions/commentActions";
import { connect } from "react-redux";
import { Authenticate } from "../../routes/protectedRoutes";

export class CommentsView extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      display: "none",
      comments: ""
    };
  }
  componentWillUpdate(nextProps) {
    let comments = nextProps.comments;
    let prev = this.props.comments;
    if (
      comments.results.length > prev.results.length ||
      prev.thread.length !== comments.thread.length ||
      prev.comment.length!== comments.comment.length
    ) {
      this.props.getComments(nextProps.slug);
    }
  }

  handleClick = event => {
    const id = event.target.id;
    this.props.deleteComment(this.props.slug, id);
  };
  render() {
    const response = this.props.comments.results;
    const comments = response.map(item => {
      if (
        item.author.username !==
        Authenticate(localStorage.getItem("token")).res.username
      ) {
        return (
          <CommentCard
            {...item}
            key={item.id}
            onclick={this.handleClick}
            dropdown={true}
          />
        );
      } else {
        return (
          <CommentCard
            {...item}
            key={item.id}
            onclick={this.handleClick}
            button={false}
          />
        );
      }
    });
    return <Fragment>{comments}</Fragment>;
  }
}
const mapStateToProps = state => ({
  comments: state.commentReducer,
  slug: state.articlesReducer.onearticle.slug
});
export default connect(
  mapStateToProps,
  { getComments, deleteComment }
)(CommentsView);
