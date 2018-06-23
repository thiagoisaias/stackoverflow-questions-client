import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Search from "../Search";

describe("Search", () => {
  const component = shallow(<Search />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
