import {expect, test} from 'vitest';
import {intersect} from "./lists.ts";

test('intersect', () => {
  expect(intersect([1, 2], [2, 3])).toStrictEqual([2]);
  expect(intersect([1, 2, 3], [-1, 0, 1, 2])).toStrictEqual([1, 2]);
  expect(intersect([1, 2], [3, 4])).toStrictEqual([]);
});

// TODO: test resolve
