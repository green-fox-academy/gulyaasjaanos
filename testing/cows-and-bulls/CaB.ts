"use strict";


export class CaB {

    private static CAB:number;
    private static guessN:number;

    constructor() {
        CaB.CAB = Math.floor(1000 + Math.random() * 9000);
        CaB.guessN = 0;
    }

    public guess(guess:number) {
        let cow:number = 0;
        let bull:number = 0;

        const aCAB = CaB.CAB.toString().split('');
        const aGuess = guess.toString().split('');
        aGuess.forEach( (e,i) => {
            if ( e === aCAB[i] ) {
                cow++;
            } else if ( aCAB.indexOf(e) >= 0 ) {
                bull++;
            }
        });

        return `${cow} cow, ${bull} bull`;

    }

    public set(cab:number) {
        CaB.CAB = cab;
    }


    public game() {
        let rnd = 0;
        do {
            rnd = Math.floor(1000 + Math.random() * 9000);
            CaB.guessN++;
            console.log(`attempt #${CaB.guessN}: ${rnd} : ${this.guess(rnd)}`);
        } while ( this.guess(rnd) !== "4 cow, 0 bull")
    }



}



//const CAB = new CaB();
//CAB.set(7624);
//console.log(CAB.guess(7624));
//CAB.game();