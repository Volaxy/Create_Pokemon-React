import "./Pokemon.css";

const Pokemon = (props) => {
    return (
        props.pokemons.map(pokemon => {
            return <div key={pokemon.name} className="pokemon">
                <h2 className="pokemon__title">{pokemon.name}</h2>

                <div className="pokemon__image" style={{boxShadow: `0px 0px 20px ${props.pokemonBoxShadow}`}}>
                    <img src={pokemon.url} alt="The pokemon profile" />
                </div>

                <section className="pokemon__attributes">
                    <div className="pokemon__attributes__att">
                        <h3 className="pokemon__attributes__att__name">HP</h3>
                        <input className="pokemon__attributes__att__input pokemon__attributes__att__input--hp" type="text" value={pokemon.hp} disabled />
                    </div>
                    
                    <div className="pokemon__attributes__att">
                        <h3 className="pokemon__attributes__att__name">ATK</h3>
                        <input className="pokemon__attributes__att__input pokemon__attributes__att__input--atk" type="text" value={pokemon.atk} disabled />
                    </div>

                    <div className="pokemon__attributes__att">
                        <h3 className="pokemon__attributes__att__name">DEF</h3>
                        <input className="pokemon__attributes__att__input pokemon__attributes__att__input--def" type="text" value={pokemon.def} disabled />
                    </div>
                </section>
            </div>
        })
    )
}

export default Pokemon;
