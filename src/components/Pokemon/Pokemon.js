import "./Pokemon.css";

const Pokemon = () => {
    return (
        <div className="pokemon">
            <h2 className="pokemon__title">Bulbasaur</h2>

            <div className="pokemon__image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" alt="The pokemon profile" />
            </div>

            <section className="pokemon__attributes">
                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">HP</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--hp" type="text" disabled />
                </div>
                
                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">ATK</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--atk" type="text" disabled />
                </div>

                <div className="pokemon__attributes__att">
                    <h3 className="pokemon__attributes__att__name">DEF</h3>
                    <input className="pokemon__attributes__att__input pokemon__attributes__att__input--def" type="text" disabled />
                </div>
            </section>
        </div>
    )
}

export default Pokemon;
