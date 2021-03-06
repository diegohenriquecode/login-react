import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

  body {
    background: #FFF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: weight 500;
  }
  button {
    cursor: pointer;
  }
`;
