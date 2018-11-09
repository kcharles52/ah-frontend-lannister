import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Authenticate } from "../../routes/protectedRoutes";
import { AUTHENTICATED } from "../../utils/myHeaders";
import { getProfile } from "../../actions/profileActions/profileActions";
import UserProfile from "../../views/profile/profileView";

export class Profile extends Component {
  state = {
    profile: {
      username: "",
      first_name: "",
      last_name: "",
      bio: "",
      image: "",
      number_of_articles: 0,
      app_notification_enabled: false,
      email_notification_enabled: false
    }
  };

  handleFollow = () => {};
  componentWillMount() {
    const username = this.props.match.params.username;
    this.setState({
      profile: {
        username: username
      }
    });
    this.props.dispatch(getProfile(username));
  }

  render() {
    let loggedInUser = Authenticate(AUTHENTICATED);
    let isOwner;
    loggedInUser.username === this.state.profile.username
      ? (isOwner = true)
      : (isOwner = false);

    return (
      <React.Fragment>
        <UserProfile {...this.props} isOwner={isOwner} />
      </React.Fragment>
    );
  }
}
Profile.propTypes = {
  profile: PropTypes.object
};

const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
