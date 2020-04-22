"use strict";



first()
    .then( (value) => second(value) )
    .then(console.log);