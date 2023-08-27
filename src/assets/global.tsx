import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    background-color: var(--background);
}

:root {
  --background: #F2F2F2;

  --co-font: #0D0D0D;

  --co-primary: ;
  --co-secundary: ;
  --co-tercuary: ;
}

`