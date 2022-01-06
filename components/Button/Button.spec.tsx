import Button from "./Button";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("it triggers the callback", () => {
  let called = false;
  const cb = () => {
    called = true;
  };

  const { container } = render(<Button onClick={cb}>Button</Button>);
  fireEvent.click(container.firstChild);

  expect(called).toBeTruthy();
});

test("it renders a button with the expected content", () => {
  const { container } = render(<Button onClick={() => {}}>Button</Button>);
  fireEvent.click(container.firstChild);

  expect(container.firstChild.nodeName).toBe("BUTTON");
  expect(container.firstChild.textContent).toBe("Button");
});

test("it has different classes if not primary", () => {
  const { container: PrimaryButtonContainer } = render(
    <Button onClick={() => {}}>Button</Button>
  );
  const { container: SecondaryButtonContainer } = render(
    <Button primary={false} onClick={() => {}}>
      Button
    </Button>
  );

  expect(PrimaryButtonContainer).not.toEqual(SecondaryButtonContainer);
});
