import test from 'tape';
import { CountLetters } from './CountLetters';

test('baba', t => {
  const string = new CountLetters();

  var actual = string.countLetters("baba");
  var expected = {
    b : 2,
    a : 2
  };

  t.deepEqual(actual, expected);
  t.end();
});

