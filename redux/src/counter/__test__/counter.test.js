import { render, screen } from "@testing-library/react";
import Counter from "../Counter";

//Header test
test("header renders with correct text", () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});


//
test("counter initialy starts with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = component.getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input initial value starts at 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = component.getByTestId("input");

  //because it it is input we right value instead of text
  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = component.getByTestId("add-subtract");
  
    expect(addBtn.textContent).toBe("+");
  });

  
test("subtract button renders -", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = component.getByTestId("add-subtract");
  
    expect(subtractBtn.textContent).toBe("+");
  });
  
