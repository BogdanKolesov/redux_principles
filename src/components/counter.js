import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.background};
    
`

const Container = styled.div`
    display: inline-flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    padding: 20px;
    border: 5px solid ${props => props.theme.colors.text};
    border-radius: 5px;
`


const CounterText = styled.h2`
    text-align: center;
    color: ${props => props.theme.colors.text};
    font-size: 50px;
`

const Buttons = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`

const CounterButton = styled.button`
    margin: 5px;
    padding: 8px;
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    &:hover{
        box-shadow: -2px -4px 24px 12px rgba(80, 34, 34, 0.19);
    }
    
`

const CounterButtonPrimary = styled(CounterButton)`
    background-color: ${props => props.theme.colors.primary};
`
const CounterButtonSecondary = styled(CounterButton)`
    background-color: ${props => props.theme.colors.secondary};
`
const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <Wrapper>
            <Container>
                <CounterText>{counter}</CounterText>
                <Buttons>
                    <CounterButton onClick={dec}>Dec</CounterButton>
                    <CounterButtonPrimary onClick={inc}>Inc</CounterButtonPrimary>
                    <CounterButtonSecondary onClick={rnd}>Random</CounterButtonSecondary>
                </Buttons>
            </Container>
        </Wrapper>
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