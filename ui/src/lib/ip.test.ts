import {expect, test} from "vitest";
import {ipToNumeric, IPv4ToNumeric, IPv6ToNumeric} from "./ip.ts";
import bigInt from "big-integer";

test('IPv6ToNumeric', () => {
  // TODO: is it correct, that's the decimal value of the long form is different from the short form?
  expect(IPv6ToNumeric('fd42::1')).toStrictEqual(bigInt("4248961025"));
  expect(IPv6ToNumeric('fd42:0000:0000:0000:0000:0000:0000:0001')).toStrictEqual(bigInt("336637374526247014468146199008655704065"));
  expect(IPv6ToNumeric('2001:7f8:79::dff0:1')).toStrictEqual(bigInt("151134748405378294218753"));
  expect(IPv6ToNumeric('2001:07f8:0079:0000:0000:0000:dff0:0001')).toStrictEqual(bigInt("42540649787573651883972417388855427073"));
});

test('IPv4ToNumeric', () => {
  expect(IPv4ToNumeric('10.0.0.1')).toBe(167772161);
  // TODO: probably ok, 10.1 is equal to 10.0.0.1
  // expect(IPv4ToNumeric('10.1')).toBe(NaN);
  expect(IPv4ToNumeric('193.201.151.65')).toBe(3251214145);
});

test('ipToNumeric', () => {
  expect(ipToNumeric('2001:07f8:0079:0000:0000:0000:dff0:0001')).toStrictEqual(bigInt("42540649787573651883972417388855427073"));
  expect(ipToNumeric('193.201.151.65')).toBe(3251214145);
});
