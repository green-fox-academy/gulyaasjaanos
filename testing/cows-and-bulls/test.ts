import test from 'tape';
import { CaB } from './CaB';

test('7296', t => {
  const game = new CaB();
  game.set(7624);

  var actual = game.guess(7296);
  var expected = '1 cow, 2 bull';

  t.equal(actual, expected);
  t.end();
});

test('7624', t => {
  const game = new CaB();
  game.set(7624);

  var actual = game.guess(7624);
  var expected = '4 cow, 0 bull';

  t.equal(actual, expected);
  t.end();
});

test('1334', t => {
  const game = new CaB();
  game.set(7624);

  var actual = game.guess(1334);
  var expected = '1 cow, 0 bull';

  t.equal(actual, expected);
  t.end();
});

test('8913', t => {
  const game = new CaB();
  game.set(7624);

  var actual = game.guess(8913);
  var expected = '0 cow, 0 bull';

  t.equal(actual, expected);
  t.end();
});


test('4762', t => {
  const game = new CaB();
  game.set(7624);

  var actual = game.guess(4762);
  var expected = '0 cow, 4 bull';

  t.equal(actual, expected);
  t.end();
});