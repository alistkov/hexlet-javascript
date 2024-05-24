import { it, expect, describe } from '@jest/globals';
import makeCensored from '../../src/arrays/strings.js';

describe('makeCensored', () => {
  it('test #1', () => {
    const sentence = 'When you play the game of thrones, you win or you die';
    expect(makeCensored(sentence, ['die', 'play'])).toEqual(
      'When you $#%! the game of thrones, you win or you $#%!'
    );
  });

  it('test #2', () => {
    const sentence = 'chicken chicken? chicken! ? ! @ chicken';
    expect(makeCensored(sentence, ['?', '!', '@', 'chicken'])).toEqual(
      '$#%! chicken? chicken! $#%! $#%! $#%! $#%!'
    );
  });
});
