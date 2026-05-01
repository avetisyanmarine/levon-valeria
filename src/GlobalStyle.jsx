import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #EFEFEF;
  margin: 0;
  padding: 0;
  font-family: ArmenianDecorativeU-Italic;
  color: #1E1E1E;
}
* {
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  @font-face {
    font-family: 'ArmAllegrou';
    src: url("/font/ArmAllegroU.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: 'SaveTheDate';
    src: url("/font/WhiteAngelica.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "ArmenianDecorativeU-Italic";
    src: url("/font/ArmenianDecorativeU-Italic.ttf");
    font-display: swap;
  }
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 36px;
    font-weight: 100;
  }
  h1 {
    font-size: 42px;
    font-family: ArmAllegrou;
    color: #EFEFEF;
    font-weight: 100;
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
