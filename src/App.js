import React from "react";
import CreatePokemonForm from "./components/CreatePokemonForm/CreatePokemonForm";

import Header from './components/Header/Header';
import PokemonType from "./components/PokemonType/PokemonType";

function App() {
    return (
        <React.Fragment>
            <Header />

            <CreatePokemonForm />

            <PokemonType />
        </React.Fragment>
    );
}

export default App;
