import test from 'tape';
import { Anagram } from './Anagram';

test('dog and god', t => {
  const operations = new Anagram();

  var actual = operations.anagram("dog","god");
  var expected = true;

  t.equal(actual, expected);
  t.end();
});

test('listen and silent', t => {
    const operations = new Anagram();
  
    var actual = operations.anagram("listen","silent");
    var expected = true;
  
    t.equal(actual, expected);
    t.end();
  });

  test('Kenya and Zimbabwe', t => {
    const operations = new Anagram();
  
    var actual = operations.anagram("Kenya","Zimbabwe");
    var expected = false;
  
    t.equal(actual, expected);
    t.end();
  });
