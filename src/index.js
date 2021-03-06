import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import { createLogger } from 'redux-logger'


// apsirasom reducerius is failu aplanko "/features"
import playerReducer from "./features/player"
import playerinventoryReducer from './features/playerinventory';
import weaponReducer from './features/weapon'; 
import effectsReducer from './features/effects';
import advancerReducer from './features/advancer'; 

// REDUX elements
const store = configureStore({      
  reducer: {
    player: playerReducer,
    playerinventory: playerinventoryReducer,
    weapon: weaponReducer,
    effects: effectsReducer,
    advancer: advancerReducer,
    
  }, middleware: [createLogger()]
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
