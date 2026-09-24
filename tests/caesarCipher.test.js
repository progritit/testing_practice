// tests/caesarCipher.test.js

import { describe, test, expect } from "@jest/globals";
import { caesarCipher } from "../src/caesarCipher.js";

describe("caesarCipher", () => {
  test("shifts letters by the given factor", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("wraps letters from z back to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});