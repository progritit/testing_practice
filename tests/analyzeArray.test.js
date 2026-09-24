// tests/analyzeArray.test.js

import { test, expect } from "@jest/globals";
import { analyzeArray } from "../src/analyzeArray.js";

test("returns the average, minimum, maximum and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzes another array correctly", () => {
  expect(analyzeArray([10, 20, 30])).toEqual({
    average: 20,
    min: 10,
    max: 30,
    length: 3,
  });
});