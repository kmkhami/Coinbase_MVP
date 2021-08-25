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
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => updateJSON( { id: 1, code: 123, public_key: 567 })}> UpdateJSON </button>
    </div>
  );
}

export default App;
