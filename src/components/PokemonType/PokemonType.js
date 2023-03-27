import Pokemon from "../Pokemon/Pokemon";
import "./PokemonType.css";

const PokemonType = (props) => {
    return (
        <div className="pokemons-type" style={{backgroundColor: props.backgroundColor}}>
            <Pokemon pokemonBoxShadow={props.pokemonBoxShadow} />
        </div>
    )
};

export default PokemonType;
