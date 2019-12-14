export class Pokemon {
    name: string;
    type: string;
    effectiveAgainst: string;
    owner: string;
    static pokemons: Pokemon[] = [];

    constructor(name: string, type: string, effectiveAgainst: string, owner: string = "Ash") {
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
        this.owner = owner;
        Pokemon.pokemons.push(this);
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }

    static bestAgainst(pokemon: Pokemon, owner: string): Pokemon {
        return Pokemon.pokemons.filter( e => e.isEffectiveAgainst(pokemon) && e.owner === owner && !pokemon.isEffectiveAgainst(e))[0];
    }

    pointAgainst(pokemon: Pokemon): number {
        let point = 0;
        point = (this.effectiveAgainst === pokemon.type) ? point+5 : point;
        point = (this.type !== pokemon.effectiveAgainst) ? point+1 : point;
        return point;
    }

}