import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secondary: #03B898;

        --grey-4: #212529;
        --grey-3: #868E96;
        --grey-2: #E9ECEF;
        --grey-1: #F8F9FA;
    }
    body{
        font-family: 'Nunito', sans-serif;
    }
`