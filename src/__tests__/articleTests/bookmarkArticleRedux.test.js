import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import {
  bookmarkArticle,
  unBookmarkArticle,
  getBookmarks
} from "../../actions/bookmark/bookmarkActions";
import boookmarkReducer from "../../reducers/bookmark/bookmarkReducer";
import ACTION_TYPE from "../../actions/actionTypes";
import { API_URLS } from "../../appUrls/index";

let store, mock;

const GET_BOOKMARKS = API_URLS.FETCH_BOOKMARKS;
const CREATE_BOOKMARK = API_URLS.CREATE_BOOKMARK + "slug/bookmark/";
const DELETE_BOOKMARK = API_URLS.CREATE_BOOKMARK + "slug/unbookmark/";

const data = {};

describe("Bookmarks actions", () => {
  beforeEach(() => {
    configureMock();
  });

  it("should create a bookmark", async () => {
    testAction("post", CREATE_BOOKMARK, 200);
  });
  it("should delet a bookmark", () => {
    testAction("delete", DELETE_BOOKMARK, 200);
  });
  it("should get a bookmark", async () => {
    testAction("get", GET_BOOKMARKS, 200);
  });
});

describe("Bookmarks reducer", () => {
  const initialState = {
    bookmark: [],
    unbookmarked: []
  };
  it("should return bookmarked article", () => {
    expect(
      boookmarkReducer(initialState, {
        type: ACTION_TYPE.BOOKMARK_ARTICLE,
        payload: {}
      })
    );
  });
  it("should return unbookmark", () => {
    expect(
      boookmarkReducer(initialState, {
        type: ACTION_TYPE.UNBOOKMARK_ARTICLE,
        payload: {}
      })
    ).toEqual({ bookmark: [], unbookmarked: [{}] });
  });

  it("should return bookmarks", () => {
    expect(
      boookmarkReducer(initialState, {
        type: ACTION_TYPE.GET_BOOKMARKS,
        payload: {}
      })
    ).toEqual({
      bookmark: {},
      unbookmarked: []
    });
  });
});
function testAction(method, url, status) {
  if (method === "post") {
    mock.onPost(url).reply(status, data);
    bookmarkArticle("slug", data)(store.dispatch);
  } else if (method === "get") {
    mock.onGet(url).reply(status, data);
    getBookmarks("slug")(store.dispatch);
  } else if (method === "delete") {
    mock.onDelete(url).reply(status, data);
    unBookmarkArticle("slug")(store.dispatch);
  }

  expect(store.getActions()).toEqual([]);
}

function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
