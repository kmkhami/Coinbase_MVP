import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User.js'; 
import AccountConnectButton from './components/AccountConnectButton.js'; 
import logo from './assets/paymentspring_logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

function App() {

  const state = useSelector((state) => state.coinbase);
  const dispatch = useDispatch();

  const { updateJSON } = bindActionCreators(actionCreators, dispatch);
  console.log(state)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
