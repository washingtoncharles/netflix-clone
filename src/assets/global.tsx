import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
  --background: #111;

  --co-font: #fff;

  --co-primary: #db0000;
  --co-secundary: #831010;
  --co-tercuary: #564d4d;
}

`