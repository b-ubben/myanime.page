import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Assistant:400,700|Montserrat:600&display=swap');

  :root {
    --base-font-size: 16px;
    --base-font-size: calc(16px + .25vw);
    --small-font-size: 12px;
    --small-font-size: calc(12px + .25vw);
    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --heading-font: Montserrat;
    --primary-font: Assistant;
    --sans-serif-fonts: var(--primary-font), var(--system-fonts);
    --bg-gradient: linear-gradient(145deg, rgba(103,17,154,1) 26%, rgba(72,9,156,1) 75%);
    --purple: #67119A;
    --blue: #48099C;
    --white: #EFF9F0;
    --black: #010101;
    --grey: #4D5061;
    --yellow: #ECC30B;
    --white-smoke: rgba(220, 220, 220, 0.17);
    --black-smoke: rgba(50, 50, 50, 0.21);
    --shadow: 1px 3px 11px var(--black-smoke);
  }

  * {
    box-sizing: border-box;
  }

  a {
    border-bottom: 3px solid var(--white-smoke);
    color: var(--yellow);
    font-weight: bold;
    padding-bottom: 0.12rem;
    text-decoration: none;
    transition: .1s linear;
  }

  a:hover,
  a:focus {
    text-shadow: 1px 0px 11px var(--white-smoke);
    border-color: var(--yellow);
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
    max-width: 1920px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font), var(--system-fonts);
    font-weight: 600;
  }

  img {
    display: block;
    width: 100%;
  }

  p {
    line-height: 2rem;
  }
`;

export default GlobalStyle;
