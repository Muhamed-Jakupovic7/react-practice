import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This <code>looks like an atom</code> amirite?
        </p>
        <br></br>
        <body>
      <form >
         First name: <input type = "text" name = "first_name" />
         <br></br>
         Last name: <input type = "text" name = "last_name" />
      </form>
   </body>
   <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
