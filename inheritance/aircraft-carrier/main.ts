"use strict";

import {Carrier} from "./Carrier";

const LEXINGTON = new Carrier("Lexington", 150, 5000);
const SHOKAKU = new Carrier("SHOKAKU", 2300, 5000);

LEXINGTON.add("F35");
LEXINGTON.add("F35");
LEXINGTON.add("F35");
LEXINGTON.add("F16");
LEXINGTON.add("F16");
LEXINGTON.getStatus();

LEXINGTON.fill();
LEXINGTON.getStatus();

LEXINGTON.fight(SHOKAKU);
LEXINGTON.getStatus();
LEXINGTON.fill();
LEXINGTON.getStatus();
LEXINGTON.fight(SHOKAKU);

LEXINGTON.fill();
LEXINGTON.getStatus();
LEXINGTON.fight(SHOKAKU);
