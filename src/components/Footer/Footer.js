import Pokeball from "../Pokeball/Pokeball";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Pokeball styles={{"top": "0%", "left": "50%", "transform": "translate(-50%, -50%)"}} />
        </footer>
    )
};

export default Footer;
