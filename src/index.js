import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import { store } from './store';
import { BrowserRouter } from "react-router-dom";
import quiz_reducer from "./store/reducers/quiz";
import "antd/dist/antd.css";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  quizes: quiz_reducer,
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  // <Provider store={store}>  
  // <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </Provider>,
  app,
  document.getElementById('root')
);

serviceWorker.register();

