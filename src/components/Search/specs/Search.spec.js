import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Search from "../Search";

describe("Search", () => {
  const mockProps = {
    handleInputChange: jest.fn(),
    handleQuerySubmit: jest.fn(),
    queryArgs: {
      tags: "",
      limit: "",
      score: "",
      sort: ""
    }
  };
  const component = shallow(<Search {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
