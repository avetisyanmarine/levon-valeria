import { useState } from "react";
import {
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
} from "./styled";

const AttendanceGuests = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    familySide: null,
    attending: null,
    guestCount: null,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guestCount" ? Math.max(0, parseInt(value) || 0) : value,
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleFamilySideChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      familySide: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!formData.fullName.trim()) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել ձեր ամբողջական անունն ու ազգանունը։",
      });
      return;
    }

    if (formData.familySide === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ ո՞ր կողմից եք։",
      });
      return;
    }

    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ արդյոք մասնակցում եք։",
      });
      return;
    }

    if (formData.attending && formData.guestCount == 0) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել հյուրերի քանակը։",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwbQ7To6idHky7c5YUBfvZGofeNhLptVFK5C-N8oRU6SEZdSBp3_RTwlNBuctC6LIGUsA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            fullName: formData.fullName,
            familySide: formData.familySide,
            attending: formData.attending,
            guestCount: formData.attending ? formData.guestCount : 0,
            comment: formData.comment || "",
          }).toString(),
        },
      );

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
      });
      setFormData({
        fullName: "",
        familySide: null,
        attending: null,
        guestCount: null,
        comment: "",
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Սխալ:", err);
      setMessage({
        type: "error",
        text: "Տեղի է ունեցել սխալ, խնդրում ենք փորձել կրկին:",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <h3>Հրավերի պատասխան</h3>
        <p>Խնդրում ենք հաստատել Ձեր մասնակցությունը</p>
      </Header>

      {message.text && (
        <MessageBox type={message.type}>
          <MessageIcon type={message.type}>
            {message.type === "success" ? "✓" : "⚠"}
          </MessageIcon>
          <MessageContent>
            <p>{message.text}</p>
          </MessageContent>
        </MessageBox>
      )}

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <FormGroup>
          <Label htmlFor="fullName">
            <h4>Անուն Ազգանուն*</h4>
          </Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Մուտքագրեք ձեր ամբողջական անունն ու ազգանունը։"
            required
          />
        </FormGroup>

        {/* Family Side */}
        <FormGroup>
          <Label>
            <h4>Ու՞մ կողմից եք հրավիրված*</h4>
          </Label>
          <OptionGrid>
            {[
              { value: "Հարսի կողմից", label: "Հարսի կողմից" },
              { value: "Փեսայի կողմից", label: "Փեսայի կողմից" },
            ].map((option) => (
              <OptionButton
                key={option.value}
                type="button"
                selected={formData.familySide === option.value}
                onClick={() => handleFamilySideChange(option.value)}
              >
                <OptionIcon>{option.icon}</OptionIcon>
                <OptionLabel>{option.label}</OptionLabel>
                <OptionLabelMobile>
                  {option.label.split(",")[0]}
                </OptionLabelMobile>
              </OptionButton>
            ))}
          </OptionGrid>
        </FormGroup>

        {/* Attending Options */}
        <FormGroup>
          <Label>
            <h4>Մասնակցու՞մ եք*</h4>
          </Label>
          <OptionGrid>
            {[
              { value: true, label: "Այո, կմասնակցեմ", icon: "✓" },
              { value: false, label: "Ոչ, չեմ մասնակցի", icon: "✗" },
            ].map((option) => (
              <OptionButton
                key={option.value}
                type="button"
                selected={formData.attending === option.value}
                onClick={() => handleAttendingChange(option.value)}
              >
                <OptionIcon>{option.icon}</OptionIcon>
                <OptionLabel>{option.label}</OptionLabel>
                <OptionLabelMobile>
                  {option.label.split(",")[0]}
                </OptionLabelMobile>
              </OptionButton>
            ))}
          </OptionGrid>
        </FormGroup>

        {/* Guest Count - Conditional */}
        {formData.attending === true && (
          <GuestCountContainer>
            <Label htmlFor="guestCount">
              <h4>Հյուրերի քանակ*</h4>
            </Label>
            <div>
              <GuestCountInput
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                max="20"
              />
            </div>
            <GuestCountHint>Ընդհանուր (ներառյալ դուք)</GuestCountHint>
          </GuestCountContainer>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <SpinnerIcon />
              <span className="hidden sm:inline">Ուղարկվում է...</span>
              <span className="sm:hidden">Ուղարկում...</span>
            </>
          ) : (
            <span>Ուղարկել</span>
          )}
        </SubmitButton>

        {/* Footer Info */}
        <FooterText>Ձեր տվյալները շատ կարևոր են մեզ համար</FooterText>
      </Form>
    </Wrapper>
  );
};

export default AttendanceGuests;
