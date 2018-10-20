import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "components/app";
import CommentBox from "components/commentBox";
import { shallow } from "enzyme";
import CommentList from "components/commnetList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows comment box and comment list", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  // look inside the div and check for CommentBox
  console.log(div.innerHTML);

  expect(div.innerHTML).toContain("Add a comment:");
  expect(div.innerHTML).toBeTruthy();

  ReactDOM.unmountComponentAtNode(div);
});

it("overall existance of  comment box ", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("overall existance of  comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
