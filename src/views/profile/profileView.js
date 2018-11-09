import React from "react";
import NavBar from "../../components/navigation/navBar";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const userProfile = props => {
  let { username, image, bio, first_name, last_name } = props.profile;
  let { isOwner } = props;
  let FollowEditBtn = "";
  if (isOwner) {
    FollowEditBtn = (
      <Button
        color=""
        className="EditLink"
        id="EditProfile"
        href={`/profile/edit/${username}`}
      >
        Edit Profile
      </Button>
    );
  } else {
    FollowEditBtn = (
      <Button
        color=""
        className="EditLink"
        id="FollowProfile"
        onClick={props.handleFollow}
      >
        Follow
      </Button>
    );
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="User-block">
        <div className="user">
          <div className="usr-info">
            <div className="profilePic">
              <img src={image} className="avatar" alt="" />
            </div>
            <div className="UserDetails">
              <div className="ProfileName">
                <div>
                  <h1>
                    {first_name} {last_name}
                  </h1>
                </div>
                <div className="ProfileUsername">
                  <h5>{bio}</h5>
                </div>
                <div className="follow-button">
                  <div> 21 Following</div>
                  <div> 12 Followers</div>
                </div>
              </div>
              <div className="FollowProfile">{FollowEditBtn}</div>
            </div>
          </div>
          <div className="user-articles" />
        </div>
      </div>
    </React.Fragment>
  );
};

userProfile.propTypes = {
  handleEditProfile: PropTypes.func,
  handleFollow: PropTypes.func,
  isOwner: PropTypes.bool,
  profile: PropTypes.object
};

export default userProfile;
