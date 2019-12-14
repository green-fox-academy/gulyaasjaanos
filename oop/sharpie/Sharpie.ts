"use strict";

class Sharpie{

    private name: string;
    private width: number;
    private inkAmount: number = 100;

    constructor(name: string, width: number = 50) {
        this.name= name;
        this.width= width;
    }

    use(){
        this.inkAmount--;
    }

}



export {Sharpie};