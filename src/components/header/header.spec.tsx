import React from "react";
import renderer from "react-test-renderer";

import { Header } from "./header";

const props = {
    onChange: jest.fn()
}

describe("<Header />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
