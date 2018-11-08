import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { signUpAction } from "../../actions/authActions/signUpAction";

import axios from "axios";
import { BASE_URL } from "../../appUrls/Urls";

const data = {
  user: {
    email: "admin@admin.com"
  }
};

const SIGNUP_URL = `${BASE_URL}/api/users/`;
let store;
let mock;
describe("SIGNUP API CALL  ", () => {
  beforeEach(() => {
    configureMock();
  });
  it("should register user", async () => {
    testAction(SIGNUP_URL, 201);
  });
  it("Should fail on poor data", async () => {
    testAction(SIGNUP_URL, 400);
  });
});

function testAction(url, status) {
  mock.onPost(url).reply(status);
  signUpAction(data)(store.dispatch);
  expect(store.getActions()).toEqual([]);
}
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
