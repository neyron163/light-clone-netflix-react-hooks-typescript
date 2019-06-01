import React from "react";
import renderer from "react-test-renderer";

import { Search } from "./search";

let props;

beforeEach(() => {
  props = {
    onChange: jest.fn()
  };
});

describe("<Search />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
