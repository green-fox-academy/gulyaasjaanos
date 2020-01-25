"use strict";

export class CountLetters {

    public countLetters(str:string) {

        return str.split('').reduce( (a,e) => {
            a[e] = (e in a)? a[e]+1 : 1;
            return a;
        },{});

    }

}
