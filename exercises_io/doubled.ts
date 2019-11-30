'use strict';

const fs = require('fs');

function decrypt(source :string, ):boolean {
    try {
        //let content= fs.readFileSync(source, 'utf-8').split('').filter( (e,i,a) => {
        //    return (i <= 1) ? e.charCodeAt(0) !== a[i+1].charCodeAt(0) : e.charCodeAt(0) !== a[i-1].charCodeAt(0) || (e.charCodeAt(0) === a[i-1].charCodeAt(0) && e.charCodeAt(0) === a[i-2].charCodeAt(0) && e.charCodeAt(0) !== a[i-3].charCodeAt(0));
        //}).join('');
        const text= fs.readFileSync(source, 'utf-8');
        let content :string= '';
        for (let i :number= 0; i < text.length; i++) {
            if ( text.charAt(i) !== text.charAt(i-1) 
                || ( text.charAt(i) === text.charAt(i-1) && text.charAt(i) === text.charAt(i-2) && text.charAt(i) === text.charAt(i-3))
            ) content+= text[i];  
        }
        let target: string= source.replace(".","_decrypted.");
        fs.writeFileSync(target, content);
        return true;
    }
    catch(error) {
        return false;
    }
    
}

let source :string= "duplicated-chars.txt";
console.log(`Decryption was successful: ${decrypt(source)}`)

export{};