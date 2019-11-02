'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

let BMI: number = Math.round((massInKg / (heightInM * heightInM)) * 2) / 2;
console.log(`BMI: ${BMI} kg/m2`);