import decodeBitsAdvanced from './decodeBitsAdvanced';
import decodeMorse from './decodeMorse';

describe('decodeBitsAdvanced', () => {
  it('should example from description', () => {
    expect(
      decodeMorse(
        decodeBitsAdvanced(
          '0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000',
        ),
      ),
    ).toBe('HEY JUDE');
  });
});
