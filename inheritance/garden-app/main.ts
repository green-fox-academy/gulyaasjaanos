"use strict";


import {Garden} from "./Garden";

const GARDEN = new (Garden);
GARDEN.addFlower("yellow",-2.5);
GARDEN.addFlower("blue",-2.5);
GARDEN.addTree("purple",-2.5);
GARDEN.addTree("orange",-2.5);

GARDEN.statusRiport();

GARDEN.watering(40);
GARDEN.statusRiport();

GARDEN.watering(70);
GARDEN.statusRiport();