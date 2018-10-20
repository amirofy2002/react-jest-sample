import React from "react";
import CommentBox from "components/commentBox";
import { shallow, mount, unmount } from "enzyme";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<CommentBox />);
});

it("has as textarea and button", () => {
  const dom = mount(<CommentBox />);
  expect(dom.find("textarea").length).toEqual(1);
  expect(dom.find("button").length).toEqual(1);
  dom.unmount();
});
