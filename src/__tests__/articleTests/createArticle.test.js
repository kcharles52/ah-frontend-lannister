import React from "react";
import { shallow } from "enzyme";
import Master, { CreateArticle } from "../../components/articles/createArticle";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import NavBar from "../../components/navigation/navBar";
import {
  createNewArticleAction,
  publishNewArticleAction
} from "../../actions/articleActions/articleAction";
import { API_URLS, BASE_URL } from "../../appUrls";
import NewArticle from "../../views/articles/createArticle";

const store = configureMockStore([thunk])({});

test("check createNewArticleAction", () => {
  const createData = {
    article: {
      title: "Driverless cars in coldcesdc",
      description: "How to mandddage office and home stress",
      body: "By taking a cold milk shake and sleeping",
      tags: [],
      category: "5"
    }
  };
  fetchMock.post(API_URLS.FETCH_CREATE_ARTICLES, createData);

  const apiResults = store.dispatch(createNewArticleAction({})).then(() => {
    const actions = store.getActions();
    expect(actions.length).toBe(1);
  });

  fetchMock.restore();
  return apiResults;
});

test("check publishNewArticleAction", () => {
  const slug = "look";

  fetchMock.put(BASE_URL + `/api/articles/${slug}/publish/`, slug);

  const apiResults = store.dispatch(publishNewArticleAction(slug)).then(() => {
    const actions = store.getActions();
    expect(actions.length).toBe(1);
  });

  fetchMock.restore();
  return apiResults;
});

it("should render my article component", () => {
  const component = shallow(<CreateArticle />);
  expect(component).toBeTruthy();
});

it("should render my article component", () => {
  let map = jest.fn();
  let props = {
    allcategory: { map }
  };
  const wrap = shallow(<NewArticle {...props} />);
  expect(wrap.find("option").text()).toEqual("Select Category");
});

it("create an article", () => {
  let dispatch = jest.fn();
  let preventDefault = jest.fn();
  let map = jest.fn();
  let props = {
    initial: { map },
    data: {},
    dispatch
  };
  let component = shallow(<CreateArticle {...props} />);
  component.instance().handleSubmit({ preventDefault });
});

it("connect create component to add store", () => {
  let component = shallow(
    <Provider store={store}>
      <Master />
    </Provider>
  );
  component.instance().handleSubmit;
  component.instance().componentWillMount;
});

it("test navbar component", () => {
  let component = shallow(<NavBar />);
  var node = component.find("Navbar");
  expect(node.length).toEqual(1);
});

it("should render my article component", () => {
  const props = { dispatch: () => jest.fn() };
  let event = {
    target: {},
    preventDefault: () => {
      jest.fn();
    }
  };
  const component = shallow(<CreateArticle {...props} />);
  component.instance().handleChange(event);
  expect(component.instance().handleSubmit(event)).toBeUndefined;
});
