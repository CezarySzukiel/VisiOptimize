import './footer.css';
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            {/*<p>Napisz do nas</p>*/}
            <Link to={`/privacy/`}><p>Polityka prywatności</p></Link>
            {/*<p>Polityka Cookies</p>*/}
            {/*<p>Ustawienia plików cookie</p>*/}
            {/*<p>Regulamin</p>*/}
            {/*<p>linki do mediów</p>*/}
        </footer>
    );
}