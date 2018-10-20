import React from "react";
import CommentBox from "components/commentBox";
import { shallow, mount, unmount } from "enzyme";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it("has as textarea and button", () => {
  //const dom = mount(<CommentBox />);
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

afterEach(() => {
  wrapped.unmount();
});
