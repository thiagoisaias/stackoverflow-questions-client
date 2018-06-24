import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import List from "../List";

describe("List", () => {
  const mockProps = {
    error: null,
    isLoading: false,
    questionList: [
      {
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
      },
      {
        id: 144,
        createdAt: "13'17",
        numberOfAnswers: 59,
        user: {
          id: 134,
          name: "Foo",
          profileImage: "http://someurl.com"
        },
        score: 968,
        tags: ["tag3", "tag4"],
        title: "This is another example!",
        url: "http://thisisanurl.com"
      }
    ]
  }
  const component = shallow(<List {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
