import React from "react";
import { shallow } from "enzyme";
import { ViewArticlesUnderTag } from "../../components/articles/viewArticlesUnderTag";

it("displays articles under a tag", () => {
  let dispatch = jest.fn();
  let props = {
    match: { params: { tag: "" } },
    dispatch
  };

  let component = shallow(<ViewArticlesUnderTag {...props} />);
  component.instance().componentWillMount();
});

it("displays articles container", () => {
  let dispatch = jest.fn();
  let props = {
    match: { params: { tag: "" } },
    dispatch
  };
  let component = shallow(<ViewArticlesUnderTag {...props} />);
  component.instance().componentWillMount();
  expect(component.find("pic-container")).toBeDefined();
});

it("has articles column", () => {
  let dispatch = jest.fn();
  let props = {
    match: { params: { tag: "" } },
    dispatch
  };
  let component = shallow(<ViewArticlesUnderTag {...props} />);
  component.instance().componentWillMount();
  expect(component.find("article-column")).toBeDefined();
});
