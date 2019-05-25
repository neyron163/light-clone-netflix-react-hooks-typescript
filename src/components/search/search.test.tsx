import React from "react";
import { render, fireEvent, getByTestId } from "react-testing-library";

import { Search } from "./search";

const props = {
  onChange: jest.fn()
};

describe('<Search />', () => {
  it("should call onChange with value", () => {
    const { container } = render(<Search {...props} />);
    const input = getByTestId(container, "input");
  
    expect(props.onChange.mock.calls.length).toBe(0);
    fireEvent.change(input, { target: { value: "value" } });
    expect(props.onChange.mock.calls.length).toBe(1);
  });
})
