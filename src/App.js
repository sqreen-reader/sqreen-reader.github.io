import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">sQReen Reader</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary btn-lg">Download</button>
      </header>
    </div>
  );
}

export default App;
