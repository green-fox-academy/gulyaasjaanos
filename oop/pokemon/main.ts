import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water', 'wild');

// Which pokemon should Ash use?

function bestAgainst(pokemons: Pokemon[], against: Pokemon): string {
    const pokemonlist = pokemons.filter( e =>
        e.isEffectiveAgainst(against)
            && !against.isEffectiveAgainst(e))
    return pokemonlist[0].name;
}

function bestOpponent(opponents: Pokemon[], pokemon: Pokemon): string {
    return opponents.map( (e) => ({ name: e.name, point: e.pointAgainst(pokemon) }) )
    .sort( (a,b) => ( b.point - a.point ) )
    [0]
    .name;
}

//console.log(`I choose you, ${pokemonOfAsh.filter( e => e.isEffectiveAgainst(wildPokemon) )[0].name}`);
//console.log(`I choose you, ${Pokemon.bestAgainst(wildPokemon, "Ash").name}`);
//console.log(`I choose you, ${pokemonOfAsh.filter( e => e.isEffectiveAgainst(wildPokemon) && !wildPokemon.isEffectiveAgainst(e))[0].name}`);
//console.log(`I choose you, ${bestAgainst(pokemonOfAsh,wildPokemon)}`);
console.log(`I choose you, ${bestOpponent(pokemonOfAsh,wildPokemon)}!`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Speziall', 'water', 'leaf'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}