import Pokemon from "../Pokemon/Pokemon";
import "./PokemonType.css";

const PokemonType = (props) => {
    return (
        props.pokemons.length > 0 && <div className="pokemons-type" style={{backgroundColor: props.backgroundColor}}>
            <Pokemon
                pokemonBoxShadow={props.pokemonBoxShadow}
                pokemons={props.pokemons}
            />
        </div>
    )
};

export default PokemonType;
