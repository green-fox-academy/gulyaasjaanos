"use strict";
import { Counter } from "./Counter";


const counters = [];
counters.push( new Counter() );
counters.push( new Counter(30) );

counters[0].add();
console.log(counters[0].get());
counters[0].add(10);
console.log(counters[0].get());
counters[1].add(10);
console.log(counters[1].get());

counters[0].reset();
counters[1].reset();

console.log(counters);

