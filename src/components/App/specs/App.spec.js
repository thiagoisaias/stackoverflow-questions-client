import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "../App";

describe("App", () => {
  const mockProps = {
    client: {}
  }
  const component = shallow(<App {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
