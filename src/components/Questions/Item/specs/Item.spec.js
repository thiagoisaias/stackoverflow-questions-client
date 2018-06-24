import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Item", () => {
  const mockProps = {
    id: 534,
    createdAt: "12'17",
    numberOfAnswers: 54,
    user: {
      id: 234,
      name: "Lorem",
      profileImage: "http://someurl.com"
    },
    score: 568,
    tags: ["tag1", "tag2"],
    title: "This is an example!",
    url: "http://thisisanurl.com"
  };

  const component = shallow(<Item {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
