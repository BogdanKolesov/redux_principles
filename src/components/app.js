import React from 'react';
import Counter from './counter';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, blue } from './themes'
const App = () => {
    return (

        <ThemeProvider theme={blue}>
            <GlobalStyle />
            <Counter />
        </ThemeProvider>
    )
}

export default App;