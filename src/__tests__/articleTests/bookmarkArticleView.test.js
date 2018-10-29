import React from "react";
import { mount } from "enzyme";
import BookmarkArticleView from "../../views/bookmark/bookmarkArticleView";

const Props = {
  bookmarks: {
    author: "amoswells",
    article_title: "Farming in uganda",
    slug: "farming-in-uganda",
    description: "Farming in uganda",
    bookmarked_at: "2018-11-20T15:35:05.187329+03:00",
    image:
      "https://res.cloudinary.com/dayhwssib/image/upload/v1542358891/authors%20haven/maavtbr1zq1ztm5ihluk.jpg",
    map: () => jest.fn()
  },
  unBookmarkArticle: () => jest.fn()
};

describe("View bookmarked articles", () => {
  let card;
  beforeEach(() => {
    card = mount(
      <BookmarkArticleView
        bookmarks={Props.bookmarks}
        unBookmarkArticle={Props.unBookmarkArticle}
      />
    );
  });

  it("Should render bookmarked article list", () => {
    card;
  });
});
