import React from "react";
import NavBar from "../../components/navigation/navBar";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/articleAssets/articlepage.scss";
import Modules from "../../utils/editortoolbar";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";

const newArticle = ({
  handlePublish,
  title,
  handleUpload,
  body,
  description,
  handleChange,
  handleSubmit,
  handleEditorChange,
  allcategory,
  category,
  tags,
  addTags,
  handleSelectChange
}) => {
  return (
    <div>
      <NavBar /><br/>
      <div className="containers">
        <Row form>
          <h6 id="compose"> New Article</h6>
          <Col md={12}>
            <center />
            <form method="post">
              <div className="row">
                <div className="col-md-1 col-xs-1" />
                <div className="col-md-8 col-xs-8">
                  <Row form>
                    <Col md={11}>
                      <FormGroup>
                        <Input
                          placeholder="Title"
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={title}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={1}>
                      <FormGroup>
                        <Button
                          href=""
                          className="image-btn upload-btn-secondary"
                          data-md-tooltip="Upload Image Title"
                          onClick={handleUpload}
                        >
                          <i className="material-icons">cloud_upload</i>
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="form-group">
                    <input
                      placeholder="Description"
                      type="text"
                      className="form-control"
                      id="title"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <ReactQuill
                      style={{ height: "420px" }}
                      id={"title"}
                      value={body}
                      modules={Modules.modules}
                      onChange={handleEditorChange}
                      placeholder="Compose your article here ..."
                    />
                  </div>
                  <div
                    className="row"
                    style={{
                      marginTop: "5em",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <button
                      type="button"
                      id="create-button"
                      className="btn btn-sm"
                      onClick={handleSubmit}
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      id="create-button"
                      className="btn btn-sm"
                      onClick={handlePublish}
                    >
                      Publish
                    </button>
                  </div>
                </div>
                <div className="col-md-2 col-xs-2">
                  <div className="form-group">
                    <div>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        value={category}
                        onChange={handleSelectChange}
                      >
                        {" "}
                        <option value="" disabled>
                          Select Category
                        </option>
                        {allcategory.map(cate => (
                          <option key={cate.id} value={cate.id}>
                            {cate.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      placeholder="Tags"
                      type="text"
                      className="form-control"
                      id="title"
                      name="tags"
                      value={tags}
                      onChange={addTags}
                      required="required"
                    />
                  </div>
                  
                </div>
                <div className="col-md-1 col-xs-1" />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

newArticle.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  allcategory: PropTypes.array,
  category: PropTypes.string.isRequired,
  handlePublish: PropTypes.func,
  handleUpload: PropTypes.func,
  addTags: PropTypes.func,
  tags: PropTypes.string.isRequired
};

export default newArticle;
