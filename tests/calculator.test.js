// tests/calculator.test.js

import { describe, test, expect } from "@jest/globals";
import { calculator } from "../src/calculator.js";

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(20, 4)).toBe(5);
  });
});