import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<nav>*/}
        {/*  <ul>*/}
        {/*    <li><Link to="/home">Home</Link></li>*/}
        {/*    <li><Link to="/about">About</Link></li>*/}
        {/*  </ul>*/}
        {/*</nav>*/}
        <Outlet />
      </header>
    </div>
  );
}

export default App;