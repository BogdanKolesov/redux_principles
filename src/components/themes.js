import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const blue = {
    colors: {
        background: 'radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 100%)',
        text: '#fff',
        main: '#db3a34',
        primary: '#ffc857',
        secondary: '#6a994e'
    }
};