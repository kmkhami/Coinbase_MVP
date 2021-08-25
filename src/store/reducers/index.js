import { combineReducers } from 'redux';
import coinbaseReducer from "./coinbaseReducer";

const reducers = combineReducers({
  coinbase: coinbaseReducer
});

export default reducers
