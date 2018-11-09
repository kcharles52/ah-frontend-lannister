import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Button } from "reactstrap";

import EditProfileView from "../../views/profile/editProfileView";
import UserProfile from "../../views/profile/profileView";

describe("Edit profile view", () => {
  it("Should render edit view", () => {
    const component = shallow(<EditProfileView />);
    expect(component.find("Input").length).toEqual(4);
    component.unmount();
  });
  it("Should render edit view", () => {
    let props = {
      profile: {
        username: "test",
        image: "",
        bio: "",
        first_name: "",
        last_name: ""
      },
      isOwner: true
    };
    let EditBtn = (
      <Button
        color=""
        className="EditLink"
        id="EditProfile"
        href={"/profile/edit/test"}
      >
        Edit Profile
      </Button>
    );
    let FollowBtn = (
      <Button
        color=""
        className="EditLink"
        id="FollowProfile"
        onClick={props.handleFollow}
      >
        Follow
      </Button>
    );
    const component = shallow(<UserProfile {...props} />);
    expect(component.find(".User-block")).toBeDefined();
    expect(component.find("Button").length).toEqual(1);

    const component1 = shallow(<UserProfile {...props} isOwner={false} />);

    expect(component.contains(EditBtn));
    expect(component1.contains(FollowBtn));

    component.unmount();
  });
});
