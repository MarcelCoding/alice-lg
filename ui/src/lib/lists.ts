/**
 * Intersect lists: [x | x <- A, x `elem` B]
 */
export function intersect<T>(a: T[], b: T[]): T[] {
  let res = [];
  for (const e of a) {
    for (const k of b) {
      if (e===k) {
        res.push(e);
        break;
      }
    }
  }
  return res;
}

/**
 * Resolve list with dict: [dict[x] or x | x <- L]
 */
export function resolve<T extends (string | number | symbol), X>(dict: Record<T, X>, list: T[]): (T | X)[] {
  let result: (T | X)[] = [];
  for (const e of list) {
    result.push(dict[e]||e);
  }
  return result;
}

