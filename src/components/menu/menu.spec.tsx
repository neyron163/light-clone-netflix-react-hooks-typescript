import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "./menu";

describe("<Menu />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
