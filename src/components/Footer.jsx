import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="Footer">
            {/*<p>Napisz do nas</p>*/}
            <Link to={`/privacy-policy/`}><p>Polityka prywatności</p></Link>
            {/*<p>Polityka Cookies</p>*/}
            {/*<p>Ustawienia plików cookie</p>*/}
            {/*<p>Regulamin</p>*/}
            <Link to={'/contact/'}><p>kontakt</p></Link>
            {/*<p>linki do mediów</p>*/}
        </footer>
    );
}