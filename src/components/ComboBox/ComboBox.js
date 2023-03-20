import "./ComboBox.css";

const ComboBox = () => {
    return (
        <div>
            <label className="combobox__label" htmlFor="pokemon-type">Chose your pokemon type:</label>
            <select className="inner-combobox">
                <option></option>
                <option>Bug</option>
                <option>Fire</option>
                <option>Ghost</option>
                <option>Fairy</option>
                <option>Normal</option>
                <option>Psychic</option>
                <option>Steel</option>
                <option>Dark</option>
                <option>Electric</option>
                <option>Fighting</option>
                <option>Grass</option>
                <option>Ice</option>
                <option>Poison</option>
                <option>Rock</option>
                <option>Water</option>
            </select>
        </div>
    )
};

export default ComboBox;
