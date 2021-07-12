/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    --white: #fefefe;
    --black: #100;
    --blue: lightskyblue;
    --secondary: #2A5878;
    --loading: #A77D79;
    --title: 'EB Garamond';
  }
  body {
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title), serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    font-family: var(--title), serif;
  }
  
  .App {
    background: -webkit-gradient(linear, left top, left bottom, from(var(--blue, lightskyblue)), to(var(--secondary, cornflowerblue)));
    background: -o-linear-gradient(var(--blue, lightskyblue), var(--secondary, cornflowerblue));
    background: linear-gradient(var(--blue, lightskyblue), var(--secondary, cornflowerblue));
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
`;

export default GlobalStyle;