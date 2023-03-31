import React, { useState } from "react";
import CreatePokemonForm from "./components/CreatePokemonForm/CreatePokemonForm";
import Footer from "./components/Footer/Footer";

import Header from './components/Header/Header';
import PokemonType from "./components/PokemonType/PokemonType";

function App() {
    const pokemonTypes = [
        {
            type: "Bug",
            backgroundColor: "#729f3f80",
            pokemonBoxShadow: "#729f3f"
        },
        {
            type: "Fairy",
            backgroundColor: "#fdb9e980",
            pokemonBoxShadow: "#fdb9e9"
        },
        {
            type: "Fire",
            backgroundColor: "#fd7d2480",
            pokemonBoxShadow: "#fd7d24"
        },
        {
            type: "Ghost",
            backgroundColor: "#7b62a380",
            pokemonBoxShadow: "#7b62a3"
        },
        {
            type: "Normal",
            backgroundColor: "#a4acaf80",
            pokemonBoxShadow: "#a4acaf"
        },
        {
            type: "Psychic",
            backgroundColor: "#f366b980",
            pokemonBoxShadow: "#f366b9"
        },
        {
            type: "Steel",
            backgroundColor: "#9eb7b880",
            pokemonBoxShadow: "#9eb7b8"
        },
        {
            type: "Dark",
            backgroundColor: "#70707080",
            pokemonBoxShadow: "#707070"
        },
        {
            type: "Electric",
            backgroundColor: "#eed53580",
            pokemonBoxShadow: "#eed535"
        },
        {
            type: "Fighting",
            backgroundColor: "#d5672380",
            pokemonBoxShadow: "#d56723"
        },
        {
            type: "Grass",
            backgroundColor: "#9bcc5080",
            pokemonBoxShadow: "#9bcc50"
        },
        {
            type: "Ice",
            backgroundColor: "#51c4e780",
            pokemonBoxShadow: "#51c4e7"
        },
        {
            type: "Poison",
            backgroundColor: "#b97fc980",
            pokemonBoxShadow: "#b97fc9"
        },
        {
            type: "Rock",
            backgroundColor: "#a38c2180",
            pokemonBoxShadow: "#a38c21"
        },
        {
            type: "Water",
            backgroundColor: "#4592c480",
            pokemonBoxShadow: "#4592c4"
        }
    ];

    const [pokemons, setPokemons] = useState([]);

    return (
        <React.Fragment>
            <Header />

            <CreatePokemonForm savePokemon={pokemon => setPokemons([...pokemons, pokemon])} />

            {pokemonTypes.map(pokemonType =>
                <PokemonType
                    key={pokemonType.type}
                    backgroundColor={pokemonType.backgroundColor}
                    pokemonBoxShadow={pokemonType.pokemonBoxShadow}
                    pokemons={pokemons.filter(pokemon => pokemon.pokemonType === pokemonType.type)}
                />
            )}

            <Footer />
        </React.Fragment>
    );
}

export default App;
