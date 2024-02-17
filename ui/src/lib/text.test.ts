import {expect, test} from "vitest";
import {humanizedJoin} from "./text.ts";

test('humanizedJoin', () => {
  expect(humanizedJoin(['a', 'b', 'c'])).toBe('a, b and c');
  expect(humanizedJoin(['a', 'b', 'c'], "hallo")).toBe('a, b hallo c');
  expect(humanizedJoin(['a'], "hallo")).toBe('a');
  expect(humanizedJoin(['a', 'c'], "hallo")).toBe('a hallo c');
})
