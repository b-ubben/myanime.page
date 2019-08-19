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
    }

    body {
        font-family: var(--sans-serif-fonts);
        font-size: var(--base-font-size);
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--heading-font), var(--system-fonts);
        font-weight: 600;
    }
`;

export default GlobalStyle;