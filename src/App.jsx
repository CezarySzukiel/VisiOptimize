import { Outlet } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <div className={"Outlet"}>
                    <Outlet />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

//  plan:
// w home:
// co to jest seo, po co to jest, jakie są korzyści,
// 1. o nas: w home
// oferta: osobna podstrona do każdej z ofert, może rozwijane menu w header? albo strona z ofertą i linki do podstron?
// oferty:
// wizytówki google my business-
// - strony www

