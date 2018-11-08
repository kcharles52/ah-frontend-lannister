import registerReducer from "../../reducers/authReducers/registerReducer";
import { REGISTER_USER } from "../../actions/actionTypes";
import expect from "expect";

describe("Register reducer", () => {
  it("should return the initial state", () => {
    expect(registerReducer({}, {})).toEqual({});
  });
  it("should handle new user", () => {
    expect(registerReducer({}, registerAction(REGISTER_USER))).toEqual({});
  });
});

function registerAction(action) {
  return {
    type: action
  };
}
