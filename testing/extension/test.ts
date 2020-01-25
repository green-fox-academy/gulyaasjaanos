'use strict';

import test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 3 and 4 is 7', function (t: any): any {
    t.equal(add(3, 4), 7);
    t.end();
  });

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
    t.equal(maxOfThree(4, 3, 5), 5);
    t.end();
  });

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: five', function (t: any): any {
    t.equal(median([1, 2, 18, 4, 5]), 6);
    t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('is vowel: A', function(t: any): any {
    t.ok(isVowel('A'));
    t.end();
});

test('is vowel: Á', function(t: any): any {
    t.ok(isVowel('Á'));
    t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});

test('translate: ruha', function (t: any): any {
    t.equal(translate('ruha'), 'ruvuhava');
    t.end();
});

test('translate: algoritmus', function (t: any): any {
    t.equal(translate('algoritmus'), 'avalgovorivitmuvus');
    t.end();
});

test('translate: krr', function (t: any): any {
    t.equal(translate('krr'), 'krr');
    t.end();
});

test('translate: ', function (t: any): any {
    t.equal(translate(''), '');
    t.end();
});

test('translate: a', function (t: any): any {
    t.equal(translate('a'), 'ava');
    t.end();
});

test('translate: trágya', function (t: any): any {
    t.equal(translate('trágya'), 'trávágyava');
    t.end();
});

test('translate: A kalap', function (t: any): any {
    t.equal(translate('A kalap'), 'AvA kavalavap');
    t.end();
});

test('translate: Klári néni', function (t: any): any {
    t.equal(translate('Klári néni'), 'Klávárivi névénivi');
    t.end();
});