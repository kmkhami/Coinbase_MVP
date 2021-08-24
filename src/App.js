import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User.js'; 
import AccountConnectButton from './components/AccountConnectButton.js'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Router>
        <Switch>
          <Route path = '/user' component={User}> 
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
