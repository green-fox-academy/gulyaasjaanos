"use strict";

export class Sum {

    public sum(numbers:number[]) {
        if (numbers.length === 0) return 0;
        return numbers.reduce( (a,e) => a + e );
    }


}