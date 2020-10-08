import decodeMorse from './decodeMorse';

describe('decodeMorse', () => {
  it('should decode example', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });

  it('should basic morse decoding', () => {
    expect(decodeMorse('.-')).toBe('A');
    expect(decodeMorse('.')).toBe('E');
    expect(decodeMorse('..')).toBe('I');
    expect(decodeMorse('. .')).toBe('EE');
    expect(decodeMorse('.   .')).toBe('E E');
    expect(decodeMorse('...---...')).toBe('SOS');
    expect(decodeMorse('... --- ...')).toBe('SOS');
    expect(decodeMorse('...   ---   ...')).toBe('S O S');
  });

  it('should more complex', () => {
    expect(decodeMorse(' . ')).toBe('E');
    expect(decodeMorse('   .   . ')).toBe('E E');
    expect(
      decodeMorse(
        '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ',
      ),
    ).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
