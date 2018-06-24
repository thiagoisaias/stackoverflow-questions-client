import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Item", () => {
  const component = shallow(<Item />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
