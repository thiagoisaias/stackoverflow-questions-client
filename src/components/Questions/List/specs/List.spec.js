import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import List from "../List";

describe("List", () => {
  const component = shallow(<List />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
