"use strict";

import {Person} from "./Person";

class Student extends Person {

    private previousOrganization:string;
    private skippedDays:number;

    constructor(name:string = "Jane Doe", age:number = 30, gender = "female", previousOrganization:string = "The School Of Life" ) {
        super(name,age,gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal() {
        console.log(`My goal is: Be a junior software developer.`);
    }

    skipDays(numberOfDays:number) {
        this.skippedDays+= numberOfDays;
    }

}

export {Student};