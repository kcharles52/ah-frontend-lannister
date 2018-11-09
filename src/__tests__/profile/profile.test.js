import React from "react";
import { shallow } from "enzyme";

import { Profile } from "../../components/profile/profile";
import { EditProfile } from "../../components/profile/editProfile";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  profileReducer: {
    profile: {
      username: "",
      first_name: "",
      last_name: "",
      bio: "",
      image: "",
      number_of_articles: 0
    }
  }
});

describe("View Profile tests", () => {
  it("should render profile", () => {
    let dispatch = jest.fn();
    let Authenticate = jest.fn();
    let props = {
      match: { params: { res: { username: "" } } },
      dispatch,
      Authenticate
    };
    let component = shallow(<Profile {...props} store={store}/>);
    component;
  });
});

describe("Profile tests", () => {
  let dispatch = jest.fn();
  let localstorage = jest.fn();
  let push = jest.fn();
  let preventDefault = jest.fn();
  let props = {
    match: { params: { username: "", res: { username: "" } } },
    dispatch,
    history: { push },
    localstorage,
    profile: { username: true }
  };
  let event = {
    target: {},
    preventDefault
  };

  it("should receive next props", () => {
    let component = shallow(<EditProfile {...props} />);
    component.setProps({ ...props });
    component.update();
  });
  it("check profile input ", () => {
    let component = shallow(<EditProfile {...props} />);
    component.instance().handleEditProfile(event);
  });

  it("it should input change profile", () => {
    let component = shallow(<EditProfile {...props} />);
    component.instance().handleInputChange(event);
  });
  it("it should recive props", () => {
    let component = shallow(<EditProfile {...props} />);
    component.instance().componentWillReceiveProps(props);
  });
});
