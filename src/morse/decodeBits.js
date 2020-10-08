/**
 * Retrieve bit rate
 *
 * @param {string} bits - The bits
 *
 * @return {number} The bit rate
 */
function getBitRate(bits) {
  return Math.min.apply(
    null,
    bits.match(/1+|0+/g).map(({ length }) => length),
  );
}

/**
 * Decode bits to morse code
 *
 * @param {string} bits - The bits to decode
 *
 * @return {string} The bits decode into morse code
 */
function decodeBits(bits) {
  const trimmedBits = bits.replace(/(^0+|0+$)/g, '');

  const bitRate = getBitRate(trimmedBits);

  return trimmedBits
    .replace(new RegExp('0'.repeat(bitRate * 7), 'g'), '   ')
    .replace(new RegExp('0'.repeat(bitRate * 3), 'g'), ' ')
    .replace(new RegExp('1'.repeat(bitRate * 3), 'g'), '-')
    .replace(new RegExp('1'.repeat(bitRate * 1), 'g'), '.')
    .replace(new RegExp('0'.repeat(bitRate * 1), 'g'), '');
}

export default decodeBits;
