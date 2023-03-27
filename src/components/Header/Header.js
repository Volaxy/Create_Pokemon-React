import Pokeball from "../Pokeball/Pokeball";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Pokeball styles={{"top": "100%", "left": "50%", "transform": "translate(-50%, -50%)"}} />
        </header>
    )
};

export default Header;
