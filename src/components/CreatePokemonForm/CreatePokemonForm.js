import { useState } from "react";
import ComboBox from "../ComboBox/ComboBox";
import Input from "../Input/Input";
import "./CreatePokemonForm.css";

const CreatePokemonForm = () => {
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [atk, setAtk] = useState("");
    const [def, setDef] = useState("");
    const [url, setUrl] = useState("");

    return (
        <form className="create-pokemon-form">
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
                value={hp}
                onChange={value => setHp(value)}
                placeholder="Life of the Pokemon"
                required={true}
            />
            <Input
                backgroundColor="#FFF2F2"
                boxShadowColor="rgba(255, 65, 65, 0.6)"
                label="ATK"
                value={atk}
                onChange={value => setAtk(value)}
                placeholder="Attack of the Pokemon"
                required={true}
            />
            <Input
                backgroundColor="#F2F3FF"
                boxShadowColor="rgba(65, 72, 255, 0.6)"
                classes="input--subsection"
                label="DEF"
                value={def}
                onChange={value => setDef(value)}
                placeholder="Defense of the Pokemon"
                required={true}
            />
            
            <Input
                backgroundColor="#FFEAFD"
                boxShadowColor="rgba(206, 65, 255, 0.6)"
                label="URL"
                value={url}
                onChange={value => setUrl(value)}
                placeholder="Image of the Pokemon"
            />

            <ComboBox />

            <input className="create-pokemon-form__submit-button" type="submit" value="Save Pokemon" />
        </form>
    )
};

export default CreatePokemonForm;
