import test from 'tape';
import { Apple } from './Apple';

test('is an apple', t => {
  const apple = new Apple();

  var actual = apple.getApple();
  var expected = 'an apple';

  t.equal(actual, expected);
  t.end();
});

test('is not an apple', t => {
  const apple = new Apple();

  var actual = apple.getApple();
  var expected = 'not an apple';

  t.equal(actual, expected);
  t.end();
});
