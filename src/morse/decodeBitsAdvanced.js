/**
 * Decode bits to morse code with variable bit rate
 *
 * @param {string} bits - The bits to decode
 *
 * @return {string} The decoded bits
 */
function decodeBitsAdvanced(bits) {
  const trimmedBits = bits.replace(/^0+|0+$/g, '');

  const partial = trimmedBits
    .replace(/0{7,}/g, '   ')
    .replace(/0{4,}/g, ' ')
    .replace(/1{4,}/g, '-')
    .replace(/1{1,3}/g, '.')
    .replace(/0+/g, '');

  return partial;
}

export default decodeBitsAdvanced;
