import "./Pokeball.css";

const Pokeball = (props) => {
    return (
        <div className="external-pokeball" style={props.styles}>
            <div className="internal-pokeball"></div>
        </div>
    )
};

export default Pokeball;