import test from 'tape';
import { Sum } from './Sum';

test('add 2 numbers', t => {
  const operations = new Sum();

  var actual = operations.sum([1, 2]);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('add 3 numbers', t => {
  const operations = new Sum();

  var actual = operations.sum([1, 2, 3]);
  var expected = 6;

  t.equal(actual, expected);
  t.end();
});

test('add 0 numbers', t => {
  const operations = new Sum();

  var actual = operations.sum([]);
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('add 1 number', t => {
  const operations = new Sum();

  var actual = operations.sum([-9]);
  var expected = -9;

  t.equal(actual, expected);
  t.end();
});