// tests/reverseString.test.js

import { test, expect } from "@jest/globals";
import { reverseString } from "../src/reverseString.js";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("preserves characters while reversing their order", () => {
  expect(reverseString("Hello!")).toBe("!olleH");
});