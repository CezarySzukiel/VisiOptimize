import './header.css';
import {Link} from "react-router-dom";

export function Header() {

    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <a href="/home/">
                    <img src="/VisioptimizeLogo.png" alt="Logo"/>
                </a>
            </div>
            <div className="buttonsContainer">
                <Link to={`/home`}>
                    <button>Home</button>
                </Link>
                <Link to={`/offer`}>
                    <button>Oferta</button>
                </Link>
                <Link to={`/about`}>
                    <button>O Nas</button>
                </Link>
            </div>
        </div>
    );
}