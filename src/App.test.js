import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sumador", () => {
  render(<App />);
  const linkElement = screen.getByText(/sumador/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders sumar", () => {
  render(<App />);
  const buttonElement = screen.getByText(/sumar/i);
  expect(buttonElement).toBeInTheDocument();
});

test("Aumenta el valor de sumar", () => {
  render(<App />);
  const buttonElement = screen.getByText(/sumar/i);
  const contadorDelSumador = screen.getByText("0");
  buttonElement.click();
  expect(contadorDelSumador.textContent).toBe("1");
});

test("No aumenta el valor al restar", () => {
  render(<App />);
  const buttonElement = screen.getByText(/restar/i);
  const contadorDelSumador = screen.getByText("0");
  buttonElement.click();
  expect(contadorDelSumador.textContent).not.toBe("-1");
});

test("No aumenta el valor mayor a diez", () => {
  render(<App />);
  const buttonElement = screen.getByText(/sumar/i);
  const contadorDelSumador = screen.getByText("0");
  for (let index = 0; index < 12; index++) {
    buttonElement.click();
  }
  expect(contadorDelSumador.innerHTML).toBe("10");
});
