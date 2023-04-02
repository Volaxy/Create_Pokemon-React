import Pokemon from "../Pokemon/Pokemon";
import "./PokemonType.css";

const PokemonType = (props) => {
    return (
        props.pokemons.length > 0 && <div className="pokemons-type" style={{backgroundColor: props.backgroundColor}}>
            {props.pokemons.map(pokemon =>
                <Pokemon
                    key={pokemon.name}
                    pokemonBoxShadow={props.pokemonBoxShadow}
                    pokemon={pokemon}
                />
            )}
        </div>
    )
};

export default PokemonType;
