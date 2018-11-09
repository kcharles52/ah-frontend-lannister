import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { editProfile, getProfile } from "../../actions/profileActions/profileActions";

import axios from "axios";
import { BASE_URL } from "../../appUrls/index";

const data = {
  user: {
    email: "admin@admin.com"
  }
};

const GET_PROFILE_URL = `${BASE_URL}/api/profiles/test`;
const EDIT_PROFILE_URL = `${BASE_URL}/api/profiles/edit/test`;
let store;
let mock;
describe("Get profile API CALL  ", () => {
  beforeEach(() => {
    configureMock();
  });
  it("should get profile", async () => {
    testAction(GET_PROFILE_URL, 200);
  });
  it("should fail if not logged in", async () => {
    testAction(GET_PROFILE_URL, 400);
  });
});

describe("Edit profile API CALL  ", () => {
  beforeEach(() => {
    configureMock();
  });
  it("should edit profile", async () => {
    testAction2(EDIT_PROFILE_URL, 200);
  });
  it("should fail if not owner", async () => {
    testAction2(EDIT_PROFILE_URL, 400);
  });
});
function testAction(url, status) {
  mock.onPost(url).reply(status);
  getProfile(data)(store.dispatch);
  expect(store.getActions()).toEqual([]);
}
function testAction2(url, status) {
  mock.onPut(url).reply(status);
  editProfile(data)(store.dispatch);
  expect(store.getActions()).toEqual([]);
}
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
