import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editProfile } from "../../actions/profileActions/profileActions";
import { Authenticate } from "../../routes/protectedRoutes";

import EditProfileView from "../../views/profile/editProfileView";

export class EditProfile extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    profile: PropTypes.object
  };
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let details = Authenticate(token);
    const user = details.username;
    this.state = {
      profile: {
        username: user,
        first_name: "",
        last_name: "",
        bio: ""
      }
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState(prevState => {
      return {
        profile: {
          ...prevState.profile,
          [name]: value
        }
      };
    });
  };

  componentWillReceiveProps(nextProps) {
    let username = nextProps.profile.username;
    if (username) {
      this.props.history.push(`/profile/${username}`);
    }
  }
  handleEditProfile = event => {
    event.preventDefault();
    let data = { profile: this.state.profile };
    return this.props.dispatch(editProfile(this.state.profile.username, data));
  };
  render() {
    return (
      <EditProfileView
        {...this.props}
        handleEditProfile={this.handleEditProfile}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
EditProfile.proptype = {
  handleEditProfile: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
