import React, { Component } from "react";
import NewArticle from "../../views/articles/createArticle";
import { connect } from "react-redux";
import {
  createNewArticleAction,
  publishNewArticleAction
} from "../../actions/articleActions/articleAction";
import PropTypes from "prop-types";
import { myHeaders } from "../../utils/myHeaders";
import { toast } from "react-toastify";
import { API_URLS } from "../../appUrls";
import { CLOUD_NAME, UPLOAD_PRESET, FOLDER } from "../../config";

export class CreateArticle extends Component {
  state = {
    allcategory: [],
    title: "",
    description: "",
    body: "",
    category: "",
    tags: [],
    image: ""
  };

  componentWillMount() {
    this.categories();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSelectChange = e => {
    this.setState({ category: e.target.value });
  };

  handlePublish = e => {
    e.preventDefault();
    this.props.dispatch(
      publishNewArticleAction(this.props.articles.article.slug)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      article: {
        title: this.state.title,
        description: this.state.description,
        body: this.state.body,
        tags: this.state.tags,
        category: this.state.category,
        image: this.state.image
      }
    };
    this.props.dispatch(createNewArticleAction(data));
  };
  handleUpload = () => {
    const imageview = window.cloudinary.openUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        folder: FOLDER
      },
      (error, result) => {
        if (result.event === "success") {
          this.setState({
            image: result.info.secure_url
          });
          imageview.close();
        }
      }
    );
    imageview.open();
  };

  handleEditorChange = value => {
    this.setState({ body: value });
  };

  categories = () => {
    let initial = [];
    fetch(API_URLS.FETCH_ARTICLE_CATEGORIES, {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        initial = data.categorys.results.map(category => {
          return category;
        });
        this.setState({
          allcategory: initial
        });
      })
      .catch(error => {
        toast.error(error, { autoClose: 3500, hideProgressBar: true });
      });
  };

  render() {
    const {
      description,
      title,
      body,
      allcategory,
      category,
      image
    } = this.state;
    return (
      <div>
        <NewArticle
          handleEditorChange={this.handleEditorChange}
          handleSubmit={this.handleSubmit}
          description={description}
          title={title}
          handleChange={this.handleChange}
          body={body}
          category={category}
          allcategory={allcategory}
          handleSelectChange={this.handleSelectChange}
          handlePublish={this.handlePublish}
          handleUpload={this.handleUpload}
          image={image}
        />
      </div>
    );
  }
}

CreateArticle.propTypes = {
  dispatch: PropTypes.func,
  articles: PropTypes.object
};

const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  articles: state.articlesReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
