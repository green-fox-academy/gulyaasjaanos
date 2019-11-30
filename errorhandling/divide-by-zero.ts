// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

function divideby(n :number) {
    try {
        if (n === 0) throw("divided by zero");
        console.log(10 / n);
    }
    catch(error) {
        console.log("fail");
    }
}

function divideby2(n :number) {
    if (n === 0) throw("divided by zero");
    return 10 / n;
}

divideby(0);
try {
    console.log(divideby2(3));
}
catch (error) {
    console.log("fail");
}

export{};