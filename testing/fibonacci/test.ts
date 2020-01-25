import test from 'tape';
import { Fibonacci } from './Fibonacci';

test('fibonacci 0', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(0);
  var expected = 0

  t.equal(actual, expected);
  t.end();
});

test('fibonacci 1', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(1);
  var expected = 1

  t.equal(actual, expected);
  t.end();
});

test('fibonacci 2', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(2);
  var expected = 1

  t.equal(actual, expected);
  t.end();
});

test('fibonacci 3', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(3);
  var expected = 2

  t.equal(actual, expected);
  t.end();
});

test('fibonacci -', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(-7);
  var expected = 0

  t.equal(actual, expected);
  t.end();
});

test('fibonacci 47', t => {
  const fibonacci = new Fibonacci();

  var actual = fibonacci.fibonacci(47);
  var expected = 2971215073

  t.equal(actual, expected);
  t.end();
});


