// tests/capitalize.test.js

import { test, expect } from "@jest/globals";
import { capitalize } from "../src/capitalize.js";

test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("leaves the rest of the string unchanged", () => {
  expect(capitalize("javascript")).toBe("Javascript");
});

test("keeps an already capitalized string unchanged", () => {
  expect(capitalize("Hello")).toBe("Hello");
});