import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Assistant:400,700|Montserrat:600&display=swap');

  :root {
    --base-font-size: calc(16px + .25vw);
    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --heading-font: Montserrat;
    --primary-font: Assistant;
    --sans-serif-fonts: var(--primary-font), var(--system-fonts);
    --bg-gradient: linear-gradient(145deg, rgba(103,17,154,1) 26%, rgba(72,9,156,1) 75%);
    --purple: #67119A;
    --blue: #48099C;
    --white: #EFF9F0;
    --black: #191308;
    --white-smoke: rgba(220, 220, 220, 0.17);
    --black-smoke: rgba(50, 50, 50, 0.17);
    --shadow: 1px 3px 11px var(--black-smoke);
  }

  body {
    background: var(--purple);
    background: var(--bg-gradient);
    color: var(--white);
    font-family: var(--sans-serif-fonts);
    font-size: var(--base-font-size);
    font-weight: 400;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font), var(--system-fonts);
    font-weight: 600;
  }
`;

export default GlobalStyle;
