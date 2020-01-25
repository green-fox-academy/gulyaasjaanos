'use strict';

export function add(a: number, b: number): number {
  //return 5;
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  /*if (a > b) {
    return a;
  } else {
    return c;
  }*/
  return Math.max(...[a,b,c]);
};

export function median(pool: number[]): number {
  //return pool[Math.floor((pool.length - 1) / 2)];
  return Math.floor(pool.reduce( (a,e) => a + e) / pool.length);
}

export function isVowel(character: string): boolean {
  //return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
  return ['a', 'u', 'o', 'e', 'i', 'á', 'é', 'ö', 'ü', 'ó', 'ő', 'ú', 'ű', 'í'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  /*
  const changed = [];
  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c) && changed.indexOf(c) < 0) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
      changed.push[c];
    }
  }*/

  let vowels = teve.split('').filter( (e) => ['a', 'u', 'o', 'e', 'i', 'á', 'é', 'ö', 'ü', 'ó', 'ő', 'ú', 'ű', 'í'].indexOf(e.toLowerCase()) >= 0);
  let vowelsObj = vowels.reduce( (a,e) => {
    a[e] = (e in a)? a[e]+1 : 1;
    return a;
  },{});
  Object.keys(vowelsObj).forEach( (e) => {
      teve = teve.split(e).join(`${e}v${e}`);
  });

  return teve;
}