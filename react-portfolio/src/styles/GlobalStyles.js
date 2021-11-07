import { size } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { customScrollbar } from './helpers/customScrollbar';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        -webkit-text-size-adjust: 100%;
        font-size: 62.5%;
    }
    
    body {
        overflow-y: scroll;
        ${size('100vh', '100%')}
        font-family: 'Chakra Petch', sans-serif;
        ${customScrollbar()};
    }
    
    .App {
        position: relative;
        display: flex;
        flex-direction: column;
        background: radial-gradient(circle, #05091e 25%, #02020c);
        min-height: 100vh;
        color: white;
        overflow-x: hidden;
    }

    .wrap {
        width: 100%;
        max-width: 1860px;
        margin: 0 auto;
        padding: 0 24px;
    }

    #root {
        ${size('100%')};
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul,
    ol {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.3;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export default GlobalStyle;
