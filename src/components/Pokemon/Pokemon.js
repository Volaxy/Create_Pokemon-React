import { useEffect, useState } from "react";
import "./Pokemon.css";

function Pokemon(props) {
    const [url, setUrl] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name.toLowerCase()}`)
            .then(result => result.json())
            .then(result => {
                setUrl(result.sprites.other.dream_world.front_default);
            })
    }, [props.pokemon.name]);

    return (
        <div key={props.pokemon.name} className="pokemon">
            <h2 className="pokemon__title">{props.pokemon.name}</h2>

            <div className="pokemon__image-box" style={{ boxShadow: `0px 0px 20px ${props.pokemonBoxShadow}` }}>
                <img
                    src={url}
                    alt="The pokemon profile"
                />
            </div>

            <section className="pokemon__attributes">
                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">HP</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--hp" type="text" value={props.pokemon.hp} disabled />
                </div>

                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">ATK</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--atk" type="text" value={props.pokemon.atk} disabled />
                </div>

                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">DEF</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--def" type="text" value={props.pokemon.def} disabled />
                </div>
            </section>
        </div>
    )
}

export default Pokemon;
