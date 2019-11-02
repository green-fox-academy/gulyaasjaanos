'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let hdaily= 6;
let hweekly= 52;
let wsemester= 17;

console.log(`hours spent coding in the semester: ${hdaily * wsemester * 5}`);
console.log(`percentage of the coding ours: ${Math.round(hdaily * 5 / hweekly *100)}%`);
