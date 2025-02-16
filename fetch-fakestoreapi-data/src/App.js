import logo from './logo.svg';
import './App.css';
import FakeStore from './components/FakeStore'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FakeStore></FakeStore>
    </div>
  );
}

export default App;
