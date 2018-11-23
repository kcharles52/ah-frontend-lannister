import React, { Component } from "react";
import ViewAllArticlesUnderTag from "../../views/articles/viewArticlesUnderTag";
import { connect } from "react-redux";
import { retrieveArticlesUnderTag } from "../../actions/articleActions/articleAction";
import PropTypes from "prop-types";
import NavBar from "../../components/navigation/navBar";

export class ViewArticlesUnderTag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const tag_name = this.props.match.params.tag_name;
    this.props.dispatch(retrieveArticlesUnderTag(tag_name));
  }
  render() {
    const articles = this.props.allarticles;
    const tag_name = this.props.match.params.tag_name;
    return (
      <div>
        <NavBar />
        <div className="tag-title-container">
          <button className="tag-title">{tag_name}</button>
        </div>
      
        <ViewAllArticlesUnderTag results={articles} tag={tag_name} />
      </div>
    );
  }
}

ViewArticlesUnderTag.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allarticles: PropTypes.array,
  match: PropTypes.object,
  params: PropTypes.object,
  tag_name: PropTypes.string
};

const mapStateToProps = state => ({
  allarticles: state.tagsReducer.articles
});

export { ViewArticlesUnderTag as ViewArticlesUnderTagTest };
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticlesUnderTag);
