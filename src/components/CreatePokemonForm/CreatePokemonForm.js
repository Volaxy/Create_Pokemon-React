import { useState } from "react";
import ComboBox from "../ComboBox/ComboBox";
import Input from "../Input/Input";
import "./CreatePokemonForm.css";

const CreatePokemonForm = (props) => {
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [atk, setAtk] = useState("");
    const [def, setDef] = useState("");
    const [pokemonType, setPokemonType] = useState("");

    function onSavePokemon(event) {
        event.preventDefault();

        props.savePokemon({name, hp, atk, def, pokemonType});
    }

    return (
        <form className="create-pokemon-form" onSubmit={onSavePokemon}>
            <Input
                backgroundColor="#FFFFF2"
                boxShadowColor="rgba(255, 201, 65, 0.6)"
                classes="input--subsection"
                label="Name"
                value={name}
                onChange={value => setName(value)}
                placeholder="Bulbasaur..."
                required={true}
            />

            <Input
                backgroundColor="#F3FFF2"
                boxShadowColor="rgba(69, 255, 65, 0.6)"
                label="HP"
                type="number"
                value={hp}
                onChange={value => setHp(value)}
                placeholder="Life"
                required={true}
            />
            <Input
                backgroundColor="#FFF2F2"
                boxShadowColor="rgba(255, 65, 65, 0.6)"
                label="ATK"
                type="number"
                value={atk}
                onChange={value => setAtk(value)}
                placeholder="Attack"
                required={true}
            />
            <Input
                backgroundColor="#F2F3FF"
                boxShadowColor="rgba(65, 72, 255, 0.6)"
                classes="input--subsection"
                label="DEF"
                type="number"
                value={def}
                onChange={value => setDef(value)}
                placeholder="Defense"
                required={true}
            />

            <ComboBox
                required={true}
                onChange={type => setPokemonType(type)}
            />
            
            <input className="create-pokemon-form__submit-button" type="submit" value="Save Pokemon" />
        </form>
    )
};

export default CreatePokemonForm;
