import logo from './water.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <p className="name1" >New Positive Generation</p>   Where water won't be an issue.
        </p>
        <a
          className="App-link"
          href="https://www.wateraid.org/ca/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate to a Charitable cause!
        </a>
      </header>
    </div>
  );
}

export default App;
