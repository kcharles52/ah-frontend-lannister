import React from "react";
import { shallow } from "enzyme";
import { ViewArticles } from "../../components/articles/viewArticles";
import AllArticles, { ArticleCard } from "../../views/articles/viewArticles";
import ViewAnArticle from "../../views/articles/viewArticle";
import SideBar from "../../views/articles/sideBar";
import EmailModal from "../../views/articles/emailModal";
import { ViewArticle } from "../../components/articles/viewArticle";

it("article component returns a div", () => {
  let map = jest.fn();
  let results = {
    map
  };
  let component = shallow(<AllArticles results={results} />);
  expect(component.containsMatchingElement(<div />)).toBeTruthy();
});
it("article component returns one article data", () => {
  const dateFormat = require("dateformat");
  const emailShare = jest.fn();
  const article = {
    read_time: "00:00:00",
    dateFormat,
    emailShare
  };
  let component = shallow(<ViewAnArticle article={article} />);
  var node = component.find(".container");
  expect(node.length).toEqual(1);
});

it("view article component returns a div", () => {
  const article = {
    read_time: ""
  };
  const data = {
    likes: 1
  };
  let component = shallow(<SideBar article={article} data={data} />);
  var node = component.find("p");
  expect(node.length).toEqual(4);
});

it("viewing articles", () => {
  let dispatch = jest.fn();
  let props = { dispatch };
  let component = shallow(<ViewArticles {...props} />);
  component.instance().componentWillMount();
});

it("viewing an article", () => {
  let dispatch = jest.fn();
  let props = {
    article: { onearticle: {} },
    match: { params: { slug: "" } },
    dispatch
  };
  let component = shallow(<ViewArticle {...props} />);
  expect(component).toBeTruthy();
});

it("email share component", () => {
  let dispatch = jest.fn();
  let handleEmail = jest.fn();
  let props = {
    dispatch,
    handleEmail
  };
  let component = shallow(<EmailModal {...props} />);
  var node = component.find("a");
  expect(node.length).toEqual(1);
});
it("calls getRangeAt", () => {
  const toString = jest.fn(() => "this is the selected text");
  const getBoundingClientRect = jest.fn(() => ({
    bottom: 5,
    top: 5,
    left: 5,
    right: 5,
    height: 5
  }));
  const getRangeAt = jest.fn(() => ({ getBoundingClientRect }));
  window.getSelection = () => ({
    toString,
    getRangeAt
  });
  let dispatch = jest.fn();
  let props = {
    match: { params: { slug: "" } },
    dispatch,
    article: { onearticle: { body: " " } }
  };
  let component = shallow(<ViewArticle {...props} />);
  component;
  component.instance().handleSelected();
  expect(getRangeAt).toHaveBeenCalled();
  expect(getRangeAt).toHaveBeenCalledWith(0);
  expect(getRangeAt).toHaveBeenCalledTimes(1);
});

it("calls handle submit", () => {
  let dispatch = jest.fn();
  let props = {
    match: { params: { slug: "" } },
    dispatch,
    comment: "commentBoxVisible",
    button: "commentBox",
    popOverBody: "",
    popOver: "commentsContainer comment-box",
    article: { onearticle: { body: " " } }
  };
  let component = shallow(<ViewArticle {...props} />);
  expect(component.instance().handleClick()).toBeUndefined();
});
it("articles are paginated", () => {
  let dispatch = jest.fn();
  let props = { dispatch };
  let component = shallow(<ViewArticles {...props} />);
  component.instance().handleScroll(window.onscroll());
  expect(dispatch).toBeCalled();
});

it("article card is rendered", () => {
  let component = shallow(<ArticleCard />);
  expect(component.length).toEqual(1);
});

it("email share component", () => {
  let dispatch = jest.fn();
  let handleEmail = jest.fn();
  let props = {
    dispatch,
    handleEmail
  };
  const component = shallow(<EmailModal {...props} />);
  component;
  var node = component.find("Label");
  expect(node.length).toEqual(1);
});
