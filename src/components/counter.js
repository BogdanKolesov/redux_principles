import React from 'react';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={dec}>Dec</button>
            <button onClick={inc}>Inc</button>
            <button onClick={rnd}>Random</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, actions)(Counter);