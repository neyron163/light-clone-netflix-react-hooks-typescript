import React from "react";
import { render, fireEvent, getByTestId } from "react-testing-library";

import { Search } from "./search";

let wrapper;
let props;

beforeEach(() => {
  props = {
    onChange: jest.fn()
  };
  wrapper = render(<Search {...props} />);
});

describe("<Search />", () => {
  it("should call onChange with value", () => {
    const input = getByTestId(wrapper.container, "input");

    expect(props.onChange).toBeCalledTimes(0);
    expect(props.onChange.mock.calls.length).toBe(0);
    fireEvent.change(input, { target: { value: "value" } });
    expect(props.onChange).toBeCalledTimes(1);
    expect(props.onChange.mock.calls.length).toBe(1);
  });

  it("should call onClick and add class for animate", () => {
    const button = getByTestId(wrapper.container, "button");
    const animate = getByTestId(wrapper.container, 'animate');

    expect(animate.className).toBe('animate');
    fireEvent.click(button);
    expect(animate.className).toBe('animate visible');
  });
});
