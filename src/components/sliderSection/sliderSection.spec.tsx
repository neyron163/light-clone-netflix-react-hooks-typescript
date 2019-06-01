import React from "react";
import renderer from "react-test-renderer";

import { SliderSection } from "./sliderSection";

jest.mock("react-slick");

const props = {
  settings: {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 7
  },
  data: [
    {
      title: "Friends",
      preview: "img"
    }
  ]
};

describe("<SliderSection />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<SliderSection {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
