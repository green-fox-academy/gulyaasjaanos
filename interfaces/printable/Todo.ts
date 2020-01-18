"use strict";

import {Printable} from "./Printable"

class Todo implements Printable {

    private task:string;
    private priority:string;
    private done:boolean;

    constructor(task:string, priority:string, done:boolean) {
        this.task = task;
        this.priority = priority;
        this.done = done;
    }

    printAllFields() {
        console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`);
    }
}

export {Todo};