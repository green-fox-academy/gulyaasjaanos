"use strict";

import {Person} from "./Person";

class Sponsor extends Person {

    private company:string;
    private hiredStudents:number;

    constructor(name:string = "Jane Doe", age:number = 30, gender = "female", company:string = "Google" ) {
        super(name,age,gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal() {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }

    hire() {
        this.hiredStudents++;
    }

}

export {Sponsor};