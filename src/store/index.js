import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


import pollReducer from "./Poll"


const reducers = combineReducers({


  poll : pollReducer ,
  
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
