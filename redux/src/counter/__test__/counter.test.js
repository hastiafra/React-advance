import { render, fireEvent, waitFor } from "@testing-library/react";
import Counter from "../Counter";

//Header test
test("header renders with correct text", () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initialy starts with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input initial value starts at 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  //because it it is input we right value instead of text
  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
});

test("changing value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  //checking an action - this case a change
  fireEvent.change(inputEl, {
    terget: {
      value: "5",
    },
  });
});

test("clicked on plus btn add one to input", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("1");
});

test("clicked on subtract btn reduce input by one", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("-1");
});

test("change input value and clicking on add btn", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    terget: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEl);

  waitFor(() => expect(counterEl.textContent).toBe("5"));
});

test("change input value and clicking on the subtract btn", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    terget: {
      value: "5",
    },
  });

  fireEvent.click(subtractBtnEl);

  waitFor(() => expect(counterEl.textContent).toBe("5"));
});

test("counter contains correct class name", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const addBtnEl = getByTestId("add-btn");

  const inputEl = getByTestId("input");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    terget: {
      value: "50",
    },
  });

  fireEvent.click(addBtnEl);

  waitFor(() => expect(counterEl.className).toBe("green"));

  fireEvent.click(addBtnEl);

  waitFor(() => expect(counterEl.className).toBe("green"));

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

   waitFor(() => expect(counterEl.className).toBe(""));

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    waitFor(() => expect(counterEl.className).toBe("red"));
});
