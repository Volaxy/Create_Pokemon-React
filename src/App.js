import React from "react";
import CreatePokemonForm from "./components/CreatePokemonForm/CreatePokemonForm";
import Footer from "./components/Footer/Footer";

import Header from './components/Header/Header';
import PokemonType from "./components/PokemonType/PokemonType";

function App() {
    // <option style={{backgroundColor: "#729f3f"}}>Bug</option>
    // <option style={{backgroundColor: "#fdb9e9"}}>Fairy</option>
    // <option style={{backgroundColor: "#fd7d24"}}>Fire</option>
    // <option style={{backgroundColor: "#7b62a3"}}>Ghost</option>
    // <option style={{backgroundColor: "#a4acaf"}}>Normal</option>
    // <option style={{backgroundColor: "#f366b9"}}>Psychic</option>
    // <option style={{backgroundColor: "#9eb7b8"}}>Steel</option>
    // <option style={{backgroundColor: "#707070"}}>Dark</option>
    // <option style={{backgroundColor: "#eed535"}}>Electric</option>
    // <option style={{backgroundColor: "#d56723"}}>Fighting</option>
    // <option style={{backgroundColor: "#9bcc50"}}>Grass</option>
    // <option style={{backgroundColor: "#51c4e7"}}>Ice</option>
    // <option style={{backgroundColor: "#b97fc9"}}>Poison</option>
    // <option style={{backgroundColor: "#a38c21"}}>Rock</option>
    // <option style={{backgroundColor: "#4592c4"}}>Water</option>
    const pokemonTypes = [
        {
            type: "Grass",
            backgroundColor: "#9bcc5080",
            pokemonBoxShadow: "#9BCC50"
        },
        {
            type: "Ice",
            backgroundColor: "#51c4e780",
            pokemonBoxShadow: "#51c4e7"
        }
    ];

    return (
        <React.Fragment>
            <Header />

            <CreatePokemonForm />

            {pokemonTypes.map(pokemonType => <PokemonType key={pokemonType.type} backgroundColor={pokemonType.backgroundColor} pokemonBoxShadow={pokemonType.pokemonBoxShadow} />)}

            <Footer />
        </React.Fragment>
    );
}

export default App;
