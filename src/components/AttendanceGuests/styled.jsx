import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  /* max-width: 390px; */
  /* box-sizing: border-box; */
  /* overflow: hidden; */
  /* padding: 16px; */
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  p {
    color: #9ca3af;
    margin-top: 8px;
    font-size: 16px;
  }
`;

const MessageBox = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  animation: fadeInSlide 0.3s ease-out;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${(props) =>
    props.type === "success"
      ? `
    background: linear-gradient(to right, #f0fdf4, #d1fae5);
    border-left: 4px solid #22c55e;
    color: #166534;
  `
      : `
    background: linear-gradient(to right, #fef2f2, #fce7f3);
    border-left: 4px solid #ef4444;
    color: #7f1d1d;
  `}
`;

const MessageIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-top: 2px;
  ${(props) =>
    props.type === "success" ? `color: #22c55e;` : `color: #ef4444;`}
`;

const MessageContent = styled.div`
  flex: 1;

  p {
    font-weight: 600;
    font-size: 16px
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;

  @media (min-width: 640px) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: #1f2937;
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover {
    border-color: #d1d5db;
  }

  &:focus {
    outline: none;
    border-color: #1f2937;
    ring: 4px;
    box-shadow: 0 0 0 4px #f3f4f6;
  }

  @media (min-width: 640px) {
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 12px;
  }
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (min-width: 640px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const OptionButton = styled.button`
  position: relative;
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  border: none;
  cursor: pointer;

  @media (min-width: 640px) {
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 12px;
    gap: 12px;
  }

  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 14px;
    gap: 12px;
  }

  span:first-child {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px
    }
  }

  ${(props) =>
    props.selected
      ? `
    background-color: #1e1e1e;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(107, 114, 128, 0.4);
    transform: scale(1.05);
  `
      : `
    background-color: #f3f4f6;
    color: #374151;
    border: 2px solid #d1d5db;

    &:hover {
      background-color: #e5e7eb;
      border-color: #d1d5db;
    }

    &:active {
      transform: scale(0.95);
    }
  `}
`;

const GuestCountContainer = styled.div`
  animation: fadeInSlide 0.3s ease-out;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GuestCountInput = styled(Input)``;

const GuestCountHint = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 6px;

  @media (min-width: 640px) {
    margin-top: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: #1f2937;
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover {
    border-color: #d1d5db;
  }

  &:focus {
    outline: none;
    border-color: #1f2937;
    box-shadow: 0 0 0 4px #f3f4f6;
  }

  @media (min-width: 640px) {
    padding: 12px 16px;
    font-size: 14px;
    border-radius: 12px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: #1e1e1e;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(107, 114, 128, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;

  @media (min-width: 640px) {
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    padding: 16px 24px;
    font-size: 16px;
  }

  &:disabled {
    background-color: #d1d5db;
    color: #4b5563;
    opacity: 0.6;
    cursor: not-allowed;
    transform: scale(1);
    box-shadow: none;
  }

  &:not(:disabled):active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #f3f4f6;
  }
`;

const SpinnerIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 640px) {
    width: 20px;
    height: 20px;
  }
`;

const FooterText = styled.p`
  text-align: center;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  font-size: 16px;

  @media (min-width: 640px) {
    padding-top: 16px;
    font-size: 16px;
  }
`;

const OptionIcon = styled.span`
  font-size: 14px;

  @media (min-width: 640px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px
  }
`;

const OptionLabel = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
`;

const OptionLabelMobile = styled.span`
  @media (min-width: 640px) {
    display: none;
  }

  font-size: 14px;
`;

export {
  Wrapper,
  Header,
  MessageBox,
  MessageIcon,
  MessageContent,
  Form,
  FormGroup,
  Label,
  Input,
  OptionGrid,
  OptionButton,
  GuestCountContainer,
  GuestCountInput,
  GuestCountHint,
  TextArea,
  SubmitButton,
  SpinnerIcon,
  FooterText,
  OptionIcon,
  OptionLabel,
  OptionLabelMobile,
};
