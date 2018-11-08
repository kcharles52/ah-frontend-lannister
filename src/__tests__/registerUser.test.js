import React from "react";
import expect from "expect";
import { shallow} from "enzyme";

import { RegisterUser } from "../components/auth/registerUser";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  userReducer: {
    isLoggedIn: false
  }
});

describe("Register User form tests", () => {

  it("render form with inputs and buttons", () => {
    const props = {
      user: {},
      signUpAction: () => jest.fn(),
      actions: {},
      newUser: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    };
    const wrapper = shallow(
      <Provider store={store}>
        <RegisterUser store={store} {...props} />
      </Provider>
    );
    expect(wrapper.find(".signup-form")).toBeDefined();
    const singUpButton = wrapper
      .dive()
      .find("Button")
      .first();
    expect(singUpButton.prop("type")).toBe("submit");
    singUpButton.simulate("click");
    expect(wrapper.dive().find("Input").length).toEqual(4);
    expect(wrapper.dive().state().newUser).toMatchObject(props.newUser);

    wrapper.unmount();
  });

  it("should handle submit", () => {
    let preventDefault = jest.fn();
    let signUpAction = jest.fn();

    const component = shallow(<RegisterUser />);
    component.setProps({ signUpAction });
    component.find("form").simulate("submit", { preventDefault });
  });
  it("should handle submit", () => {
    let add=jest.fn();
    const component = shallow(<RegisterUser />);
    component.instance().handleInputChange({"target":{"type":"","value":"user","classList":{add}}});
  });
});
