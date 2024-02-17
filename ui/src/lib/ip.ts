import bigInt from 'big-integer'

/**
 * Convert IPv6 to big integer
 */
export function IPv6ToNumeric(addr: string): bigInt.BigInteger {
  const parts = addr.split(":"); // let's se what we can do about the :: expansion
  let expanded = [];

  for (const p of parts) {
    if (p === "") { continue; }
    let binary = parseInt(p, 16).toString(2); // Convert to binary
    while (binary.length < 16) {
      binary = "0" + binary; // leftpad
    }
    expanded.push(binary);
  }
  return bigInt(expanded.join(""), 2);
}

/**
 * Convert IPv4 to int
 */
export function IPv4ToNumeric(addr: string):number {
  const octets = addr.split('.');
  return parseInt(octets[0], 10) * 16777216 + // 256^3
         parseInt(octets[1], 10) * 65536 + // 256^2
         parseInt(octets[2], 10) * 256 + // 256^1
         parseInt(octets[3], 10); // 256^0
}

/**
 * Convert IPv4 or IPv6 to Numeric
 */
export function ipToNumeric(addr: string): number | bigInt.BigInteger {
  if (addr.includes(":")) {
    return IPv6ToNumeric(addr);
  }
  return IPv4ToNumeric(addr);
}

