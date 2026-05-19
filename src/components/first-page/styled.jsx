import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const FirstPagePart = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FirstPagePartContext = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;

  .maintext {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 22px;
    }
    h3 {
      font-size: 45px;
    }
  }
  h2 {
    text-align: center;
    font-family: ArmAllegrou;
    line-height: 35px;
    letter-spacing: 5px;
  }
  img {
    width: 137px;
    height: 97px;
  }
  .uniqueH2 {
    font-family: ArmenianDecorativeU-Italic;
    margin-bottom: 28px;
  }
  .uniqueDiv {
    flex-direction: column;
    gap: 10px;
    margin-top: -24px;

    .uniqueH1 {
      line-height: 48px;
    }
    p {
      color: #965a00;
      font-family: ArmAllegrou;
      font-weight: 400;
      margin-top: -64px;
    }
  }
`;
export { FirstPagePart, FirstPagePartContext };
