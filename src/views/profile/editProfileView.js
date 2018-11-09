import React from "react";
import NavBar from "../../components/navigation/navBar";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const EditProfileView = props => {
  EditProfileView.propTypes = {
    handleEditProfile: PropTypes.func,
    handleInputChange: PropTypes.func
  };
  let { handleInputChange, handleEditProfile } = props;

  return (
    <React.Fragment>
      <NavBar />
      <div className="editProfile">
        <div className="container">
          <Form onSubmit={handleEditProfile}>
            <FormGroup>
              <Input
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="last_name"
                id="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                required
              />
              <FormGroup>
                <Input
                  type="textarea"
                  name="bio"
                  id="bioText"
                  placeholder="Enter a short bio here"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="profilePicture">Profile Image</Label>
                <Input type="file" name="image" id="profilePicture" />
                <FormText>The image should be less than 2MB</FormText>
              </FormGroup>
              <Button>Save</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfileView;
