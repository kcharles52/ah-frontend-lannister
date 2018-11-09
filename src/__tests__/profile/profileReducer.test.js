import ACTION_TYPES from "../../actions/actionTypes.js";
import profileReducer from "../../reducers/profileReducer";

describe("Profile reducer", () => {
  it("should return the initial state", () => {
    expect(profileReducer({}, {})).toEqual({});
  });

  it("should handle GET_POST_START", () => {
    const startAction = {
      type: ACTION_TYPES.GET_PROFILE
    };
    expect(profileReducer({}, startAction)).toEqual({});
  });

  it("should handle Edit profile", () => {
    const startAction = {
      type: ACTION_TYPES.EDIT_PROFILE
    };
    expect(profileReducer({}, startAction)).toEqual({});
  });
});
