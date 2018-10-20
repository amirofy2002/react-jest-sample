import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../app";
import CommentBox from "../commentBox";
import { shallow } from "enzyme";
import CommentList from "../commnetList";

it("shows comment box and comment list", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  // look inside the div and check for CommentBox

  console.log(div.innerHTML);

  expect(div.innerHTML).toContain("Comment Box");
  expect(div.innerHTML).toBeTruthy();

  ReactDOM.unmountComponentAtNode(div);
});

it("overall existance of  comment box ", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("overall existance of  comment List", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
