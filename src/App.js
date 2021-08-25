import logo from './assets/paymentspring_logo.svg';
import './App.css';
import Pledge from './components/Pledge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Pledge></Pledge>
    </div>
  );
}

export default App;
