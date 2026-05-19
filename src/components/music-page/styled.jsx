import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const tipSlideIn = `
  @keyframes tipSlideIn {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }
`;

const tipFadeOut = `
  @keyframes tipFadeOut {
    from {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
    to {
      opacity: 0;
      transform: translateY(-50%) translateX(10px);
    }
  }
`;

export const MusicPagePart = styled.div`
  ${tipSlideIn}
  ${tipFadeOut}
  position: fixed;
  z-index: 40;
  right: 20px;
  top: 5vh;
  width: 60px;
  height: 60px;
  background: #1e1e1e;
  opacity: 0.95;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 1;
  }

  .tip {
    position: absolute;
    right: calc(100% + 14px);
    top: 50%;
    background: rgba(30, 30, 30, 0.95);
    color: #fff;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    white-space: nowrap;
    animation: tipSlideIn 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    pointer-events: auto;
    cursor: pointer;
    user-select: none;
  }

  .tip.fade-out {
    animation: tipFadeOut 350ms ease forwards;
  }

  img {
    width: 20px;
    pointer-events: none;
  }
`;
