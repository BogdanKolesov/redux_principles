// // const initialState = 0; //Первоначальное состояние
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);
const { dispatch } = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));



