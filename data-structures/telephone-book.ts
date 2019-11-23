'use strict';

/*
    Create a map with the following key-value pairs.
    Name (key) 	Phone number (value)
    William A. Lathan 	405-709-1865
    John K. Miller 	402-247-8568
    Hortensia E. Foster 	606-481-6467
    Amanda D. Newland 	319-243-5613
    Brooke P. Askew 	307-687-2982

    Create an application which solves the following problems.
        What is John K. Miller's phone number?
        Whose phone number is 307-687-2982?
        Do we know Chris E. Myers' phone number? */

const tbook: { [key: string]: string; } = {
    "William A. Lathan": 	"405-709-1865",
    "John K. Miller": 	    "402-247-8568",
    "Hortensia E. Foster": 	"606-481-6467",
    "Amanda D. Newland": 	"319-243-5613",
    "Brooke P. Askew": 	    "307-687-2982"
}

function phonePair(item: string) {
    for (const name in tbook) {
        if (tbook[name] === item) {
            return name;
        } else if (name === item) {
            return tbook[name];
        }
    }
    return "no match";
}

console.log(phonePair("John K. Miller"));
console.log(phonePair("307-687-2982"));
console.log(phonePair("Chris E. Myers"));


export{};