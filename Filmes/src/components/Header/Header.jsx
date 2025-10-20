import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header(){
    return(
        <div className='navBar'>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/verFilmes">Ver Filmes</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
            </nav>
        </div>
    )
}

export default Header;

