"use strict";

import {Student} from "./Student";
import {Mentor} from "./Mentor";


class Cohort {

    private name:string;
    private students:Student[];
    private mentors:Mentor[];

    constructor(name:string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(Student:Student) {
        this.students.push(Student);
    }

    addMentor(Mentor:Mentor) {
        this.mentors.push(Mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    }

}

export {Cohort};