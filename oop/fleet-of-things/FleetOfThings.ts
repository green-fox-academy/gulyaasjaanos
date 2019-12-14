import { Thing } from './Thing';
import { Fleet } from './Fleet';

class FleetOfThings {

    private fleet: Fleet;

    constructor(fleet: Fleet) {
        this.fleet = fleet;
    }

    main() {
        this.fleet.add(new Thing("Get milk"));
        this.fleet.add(new Thing("Remove the obstacles"));
        this.fleet.add(new Thing("Stand up"));
        //this.fleet.getThings().filter( e => e.getName() === "Stand up")[0].complete();
        this.fleet.getThings()[this.fleet.getThings().length-1].complete();
        this.fleet.add(new Thing("Eat lunch"));
        //this.fleet.getThings().filter( e => e.getName() === "Eat lunch")[0].complete();
        this.fleet.getThings()[this.fleet.getThings().length-1].complete();
    }

    print() {
       this.fleet.getThings().forEach( (e,i,a) => {
            console.log(`${i+1}. [${ (e.getCompleted()) ? "x" : " "  }] ${e.getName()}`);
       });
    }

}

export { FleetOfThings };