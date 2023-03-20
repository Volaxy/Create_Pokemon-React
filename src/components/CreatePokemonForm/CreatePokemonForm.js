import ComboBox from "../ComboBox/ComboBox";
import Input from "../Input/Input";
import "./CreatePokemonForm.css";

const CreatePokemonForm = () => {
    return (
        <form className="create-pokemon-form">
            <Input backgroundColor="#FFFFF2" boxShadowColor="rgba(255, 201, 65, 0.6)" classes="input--subsection" label="Name" />

            <Input backgroundColor="#F3FFF2" boxShadowColor="rgba(69, 255, 65, 0.6)" label="HP" />
            <Input backgroundColor="#FFF2F2" boxShadowColor="rgba(255, 65, 65, 0.6)" label="ATK" />
            <Input backgroundColor="#F2F3FF" boxShadowColor="rgba(65, 72, 255, 0.6)" classes="input--subsection" label="DEF" />
            
            <Input backgroundColor="#FFEAFD" boxShadowColor="rgba(206, 65, 255, 0.6)" label="URL" />

            <ComboBox />

            <input className="create-pokemon-form__submit-button" type="submit" value="Save Pokemon" />
        </form>
    )
};

export default CreatePokemonForm;
