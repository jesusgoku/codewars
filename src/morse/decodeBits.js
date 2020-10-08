function decodeCharBits(speed) {
  return (bits) =>
    bits
      .replace(new RegExp('1'.repeat(speed * 3), 'g'), '-')
      .replace(new RegExp('1'.repeat(speed * 1), 'g'), '.')
      .replace(new RegExp('0'.repeat(speed * 1), 'g'), '');
}

function decodeWordBits(speed) {
  return (bits) =>
    bits
      .split('0'.repeat(speed * 3))
      .map(decodeCharBits(speed))
      .join(' ');
}

function getBitsSpeed(bits) {
  const MAX = Infinity;

  const length1 = bits
    .split(/0+/)
    .filter((item) => !!item)
    .reduce((min, item) => (item.length < min ? item.length : min), MAX);

  const length0 = bits
    .split(/1+/)
    .filter((item) => !!item)
    .reduce((min, item) => (item.length < min ? item.length : min), MAX);

  if (length0 === MAX) return length1;

  // eslint-disable-next-line no-nested-ternary
  return length1 === length0 ? length1 : length1 % 3 === 0 ? length1 / 3 : length1;
}

function decodeBits(bits) {
  const trimmedBits = bits.replace(/^0+/, '').replace(/0+$/, '');

  const speed = getBitsSpeed(trimmedBits);

  return trimmedBits
    .split('0'.repeat(speed * 7))
    .map(decodeWordBits(speed))
    .join('   ');
}

export default decodeBits;
