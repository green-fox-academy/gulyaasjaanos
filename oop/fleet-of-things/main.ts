import { Thing } from './Thing';
import { Fleet } from './Fleet';
import { FleetOfThings } from './FleetOfThings';

let fleet = new Fleet();

let fleetofthings = new FleetOfThings(fleet);
fleetofthings.main();
fleetofthings.print();


// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 