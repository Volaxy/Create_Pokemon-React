import React from "react";
import CreatePokemonForm from "./components/CreatePokemonForm/CreatePokemonForm";
import Footer from "./components/Footer/Footer";

import Header from './components/Header/Header';
import PokemonType from "./components/PokemonType/PokemonType";

function App() {
    return (
        <React.Fragment>
            <Header />

            <CreatePokemonForm />

            <PokemonType />

            <Footer />
        </React.Fragment>
    );
}

export default App;
