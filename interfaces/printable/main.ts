"use strict";

import {Domino} from "./Domino";
import {Todo} from "./Todo";

const dominoes:Domino[] = [];
const todos:Todo[] = [];

dominoes.push(new Domino(3,2));
todos.push(new Todo("get milk", "high", true));

for (let domino of dominoes) {
    domino.printAllFields();
}
  
for (let todo of todos) {
    todo.printAllFields();
}