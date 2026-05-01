import styled from "styled-components";
import { Flexible } from "../../../GlobalStyle";

export const ThirdPageBlockPart = styled(Flexible)`
  gap: 20px;
  justify-content: start;
  align-items: start;
`;
export const ThirdPageBlockPartSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: none;
  }
`;
export const ThirdPageBlockPartContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;
