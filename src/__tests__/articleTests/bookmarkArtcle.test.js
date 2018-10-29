import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import { BookmarkArticle } from "../../components/bookmark/bookmarkArticle";
import SVG from "../../components/bookmark/svg";
import { ViewBookmarks } from "../../components/bookmark/viewBookmarks";

beforeEach(() => {
  configureMock();
});
let store;

describe("Bookmark article", () => {
  it("should render bookmarkArticle component", () => {
    let props = {
      dispatch: () => jest.fn()
    };
    let component = shallow(<BookmarkArticle {...props} store={store} />);
    expect(component.instance().handleBookMark());
  });
});
describe("Bookmarks", () => {
  let props = {
    bookmark: [],
    dispatch: () => jest.fn()
  };

  it("should render all bookmarks", () => {
    let component = shallow(<ViewBookmarks {...props} />);
    component;
  });
  it("should render on props change", () => {
    const component = shallow(<ViewBookmarks {...props} />);
    // component.setProps({});
    component.instance().unBookmarkArticles();
  });

  it("should render bookmark componet", () => {
    const component = shallow(<SVG handlebookmark={() => jest.fn()} />);
    let span = component.find("span");
    span.simulate("click");

  });
});
function configureMock() {
  const mockStore = configureMockStore();
  store = mockStore({});
}
