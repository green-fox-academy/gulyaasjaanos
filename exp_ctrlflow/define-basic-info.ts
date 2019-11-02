'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

let info= {
    "name": "GJ",
    "age": 37,
    "height": 182,
    "married": true
}
Object.keys(info).forEach(function(key) {
    console.log(key, info[key]);
});