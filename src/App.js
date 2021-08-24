import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountConnect from './components/AccountConnectButton.js'; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Router>
        <Switch>
          <Route path = '/:code'> 
          </Route>  
          <Route path = '/'>
          <AccountConnect />
          </Route> 
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
