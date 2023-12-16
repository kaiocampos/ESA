import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../style/App.css'
import InformationsPage from './Components/InformationsPage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ESA</h1>
      </header>
      <body>
        <section className="Login">
          <form className='formLogin'>
            <div className='loginContainer'>
            <p>Login</p>
            <input placeholder="Login"/>
            </div>
            <div>
            <p>Senha</p>
            <input placeholder="Senha" type='password'/>
            </div>
            <div className='loginButton'>
            <button
            onClick={goToNextPage()}>
              Login
            </button>
            </div>
          </form>
        </section>
      </body>
      <fotter></fotter>

    </div>
  );
}

function goToNextPage() {
  <Link to="/informations-page">Home</Link>
}

export default App;
