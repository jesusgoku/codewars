import MORSE_CODE from './morseCode';

/**
 * Convert morse code string to human readable string
 *
 * @param {string} morseCode - The morse code string
 *
 * @return {string} The morse code translated to human readable
 */
function decodeMorse(morseCode) {
  return morseCode
    .trim()
    .split(/ {2}| /)
    .map((item) => MORSE_CODE[item] || ' ')
    .join('');
}

export default decodeMorse;
