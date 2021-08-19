// // const initialState = 0; //Первоначальное состояние
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators({ actions }, dispatch);


const update = () => {
  ReactDOM.render(<Counter
    couner={store.getState()}
    inc={inc}
    dec={dec}
    rnd={() => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    }} />, document.getElementById('root'));
}
update();
store.subscribe(update);

