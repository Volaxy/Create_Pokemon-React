import React from "react";
import CreatePokemonForm from "./components/CreatePokemonForm/CreatePokemonForm";

import Header from './components/Header/Header';

function App() {
    return (
        <React.Fragment>
            <Header />

            <CreatePokemonForm />
        </React.Fragment>
    );
}

export default App;
