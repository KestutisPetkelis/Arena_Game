import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

// apsirasom reducerius is failu aplanko "/features"
import playerReducer from "./features/player" 

// REDUX elements
const store = configureStore({      
  reducer: {
    player: playerReducer,
    
  }
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
