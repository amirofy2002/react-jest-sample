import React from "react";
import CommentBox from "components/commentBox";
import { shallow, mount, unmount } from "enzyme";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a textarea that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: {
      value: "newValue"
    }
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("newValue");
});
