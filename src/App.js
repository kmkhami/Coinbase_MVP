import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User.js';
import Donate from './components/Donate.js';
import AccountConnectButton from './components/AccountConnectButton.js';
import logo from './assets/paymentspring_logo.svg';
import './App.css';
import Pledge from './components/Pledge.js';

//We should use browser cookie instead of redux
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route path = '/user' component={User}>
          </Route>
          <Route path = '/donate' component={Donate}>
          </Route>
          <Route path = '/pledge' component={Pledge}>
          </Route>
          <Route path = '/'>
            <AccountConnectButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
