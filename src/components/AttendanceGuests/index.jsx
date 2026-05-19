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
} from "./styled";

const AttendanceGuests = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    familySide: null,
    attending: null,
    guestCount: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "", ukText: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "guestCount"
          ? value === ""
            ? ""
            : Math.max(0, parseInt(value) || 0)
          : value,
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
      guestCount: value ? "" : 0,
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
    setMessage({ type: "", text: "", ukText: "" });

    if (!formData.fullName.trim()) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել ձեր ամբողջական անունն ու ազգանունը։",
        ukText: "Будь ласка, введіть ваше повне ім'я та прізвище.",
      });
      return;
    }

    if (formData.familySide === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ ո՞ր կողմից եք հրավիրված։",
        ukText: "Будь ласка, вкажіть, з чиєї ви сторони.",
      });
      return;
    }

    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ արդյոք մասնակցում եք։",
        ukText: "Будь ласка, вкажіть, чи будете ви присутні.",
      });
      return;
    }

    if (
      formData.attending &&
      (formData.guestCount === "" || formData.guestCount <= 0)
    ) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել հյուրերի վավեր քանակ (նվազագույնը 1)։",
        ukText: "Будь ласка, введіть коректну кількість гостей (мінімум 1).",
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
            attending: formData.attending ? "Այո / Так" : "Ոչ / Ні",
            guestCount: formData.attending ? formData.guestCount : 0,
            comment: formData.comment || "",
          }).toString(),
        },
      );

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
        ukText: "Дякуємо! Ваша відповідь успішно відправлена.",
      });
      setFormData({
        fullName: "",
        familySide: null,
        attending: null,
        guestCount: "",
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
        text: "Տեղի է ունեցել սխալ, խնդրում ենք փորձել կրկին։",
        ukText: "Сталася помилка, будь ласка, спробуйте ще раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper style={{ maxWidth: "100%", padding: "12px" }}>
      {/* Header */}
      <Header style={{ textAlign: "center", marginBottom: "24px" }}>
        <h3 style={{ margin: "0 0 4px 0", fontSize: "1.4em" }}>
          Հրավերի պատասխան
        </h3>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "0.9em",
            opacity: 0.7,
            margin: "0 0 16px 0",
          }}
        >
          Відповідь на запрошення
        </p>
        <p style={{ margin: "0 0 4px 0", fontSize: "1.05em" }}>
          Խնդրում ենք հաստատել Ձեր մասնակցությունը
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "0.85em",
            opacity: 0.65,
            margin: "0",
          }}
        >
          Будь ласка, підтвердіть свою присутність
        </p>
      </Header>

      {message.text && (
        <MessageBox
          type={message.type}
          style={{ margin: "16px 0", padding: "12px" }}
        >
          <MessageIcon type={message.type}>
            {message.type === "success" ? "✓" : "⚠"}
          </MessageIcon>
          <MessageContent
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <p style={{ margin: "0", fontSize: "0.95em", lineHeight: "1.4" }}>
              {message.text}
            </p>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.85em",
                opacity: 0.85,
                margin: "0",
                lineHeight: "1.4",
              }}
            >
              {message.ukText}
            </p>
          </MessageContent>
        </MessageBox>
      )}

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <Label
            htmlFor="fullName"
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <h4 style={{ margin: "0", fontSize: "1.1em" }}>Անուն Ազգանուն*</h4>
            <span
              style={{
                fontStyle: "italic",
                fontSize: "0.85em",
                fontWeight: "normal",
                opacity: 0.65,
              }}
            >
              Ім'я та Прізвище*
            </span>
          </Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Մուտքագրեք այստեղ / Введіть тут"
            required
            style={{ width: "100%", padding: "12px" }}
          />
        </FormGroup>

        {/* Family Side */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <Label
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <h4 style={{ margin: "0", fontSize: "1.1em" }}>
              Ու՞մ կողմից եք հրավիրված*
            </h4>
            <span
              style={{
                fontStyle: "italic",
                fontSize: "0.85em",
                fontWeight: "normal",
                opacity: 0.65,
              }}
            >
              З чиєї сторони ви запрошені?*
            </span>
          </Label>
          <OptionGrid style={{ gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              {
                value: "Հարսի կողմից",
                label: "Հարսի կողմից",
                ukLabel: "Зі сторони нареченої",
              },
              {
                value: "Փեսայի կողմից",
                label: "Փեսայի կողմից",
                ukLabel: "Зі сторони нареченого",
              },
            ].map((option) => (
              <OptionButton
                key={option.value}
                type="button"
                selected={formData.familySide === option.value}
                onClick={() => handleFamilySideChange(option.value)}
                style={{ height: "auto", padding: "12px 6px" }}
              >
                {/* Տեքստերը դրված են մեկ միասնական OptionLabel-ի մեջ, որպեսզի սթայլերը չթաքցնեն ուկրաիներենը */}
                <OptionLabel
                  style={{
                    display: "block",
                    whiteSpace: "normal",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "0.95em",
                    lineHeight: "1.3",
                    margin: 0,
                  }}
                >
                  {option.label}
                  <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.8em",
                      opacity: 0.75,
                      display: "block",
                      marginTop: "4px",
                      fontWeight: "normal",
                    }}
                  >
                    {option.ukLabel}
                  </span>
                </OptionLabel>
              </OptionButton>
            ))}
          </OptionGrid>
        </FormGroup>

        {/* Attending Options */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <Label
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <h4 style={{ margin: "0", fontSize: "1.1em" }}>Մասնակցու՞մ եք*</h4>
            <span
              style={{
                fontStyle: "italic",
                fontSize: "0.85em",
                fontWeight: "normal",
                opacity: 0.65,
              }}
            >
              Чи будете ви присутні?*
            </span>
          </Label>
          <OptionGrid style={{ gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              {
                value: true,
                label: "Այո, կմասնակցեմ",
                ukLabel: "Так, буду",
                icon: "✓",
              },
              {
                value: false,
                label: "Ոչ, չեմ մասնակցի",
                ukLabel: "Ні, не зможу",
                icon: "✗",
              },
            ].map((option) => (
              <OptionButton
                key={option.value}
                type="button"
                selected={formData.attending === option.value}
                onClick={() => handleAttendingChange(option.value)}
                style={{ height: "auto", padding: "12px 6px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <OptionIcon
                    style={{ margin: "0 0 4px 0", fontSize: "1.2em" }}
                  >
                    {option.icon}
                  </OptionIcon>
                  {/* Այստեղ նույնպես միացված է մեկ տեղում */}
                  <OptionLabel
                    style={{
                      display: "block",
                      whiteSpace: "normal",
                      textAlign: "center",
                      width: "100%",
                      fontSize: "0.95em",
                      lineHeight: "1.3",
                      margin: 0,
                    }}
                  >
                    {option.label}
                    <br />
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "0.8em",
                        opacity: 0.75,
                        display: "block",
                        marginTop: "4px",
                        fontWeight: "normal",
                      }}
                    >
                      {option.ukLabel}
                    </span>
                  </OptionLabel>
                </div>
              </OptionButton>
            ))}
          </OptionGrid>
        </FormGroup>

        {/* Guest Count - Conditional */}
        {formData.attending === true && (
          <GuestCountContainer
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginBottom: "20px",
            }}
          >
            <Label
              htmlFor="guestCount"
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <h4 style={{ margin: "0", fontSize: "1.1em" }}>
                Հյուրերի քանակ*
              </h4>
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.85em",
                  fontWeight: "normal",
                  opacity: 0.65,
                }}
              >
                Кількість гостей*
              </span>
            </Label>
            <div>
              <GuestCountInput
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                min="1"
                max="20"
                placeholder="Օրինակ՝ 2 / Наприклад: 2"
                required
                style={{ width: "100%", padding: "12px" }}
              />
            </div>
            <GuestCountHint
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                margin: "0",
                lineHeight: "1.3",
              }}
            >
              <span>Ընդհանուր (ներառյալ դուք)</span>
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.85em",
                  opacity: 0.7,
                }}
              >
                Всього (включаючи вас)
              </span>
            </GuestCountHint>
          </GuestCountContainer>
        )}

        {/* Comments / Wishes Field */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <Label
            htmlFor="comment"
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <h4 style={{ margin: "0", fontSize: "1.1em" }}>
              Ձեր մաղթանքները կամ նշումները
            </h4>
            <span
              style={{
                fontStyle: "italic",
                fontSize: "0.85em",
                fontWeight: "normal",
                opacity: 0.65,
              }}
            >
              Ваші побажання або примітки
            </span>
          </Label>
          <TextArea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Գրեք այստեղ... / Напишіть тут..."
            rows="3"
            style={{ width: "100%", padding: "12px", resize: "none" }}
          />
        </FormGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          style={{
            height: "auto",
            padding: "16px 12px",
            marginTop: "12px",
            width: "100%",
          }}
        >
          {isSubmitting ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <SpinnerIcon />
              <span style={{ fontSize: "1.05em" }}>Ուղարկվում է...</span>
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.8em",
                  opacity: 0.8,
                  fontWeight: "normal",
                }}
              >
                Надсилається...
              </span>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>
                Ուղարկել
              </span>
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.85em",
                  opacity: 0.8,
                  fontWeight: "normal",
                }}
              >
                Надіслати
              </span>
            </div>
          )}
        </SubmitButton>

        {/* Footer Info */}
        <FooterText
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "0.95em" }}>
            Ձեր տվյալները շատ կարևոր են մեզ համար
          </span>
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.85em",
              opacity: 0.7,
              fontWeight: "normal",
            }}
          >
            Ваші дані дуже важливі для нас
          </span>
        </FooterText>
      </Form>
    </Wrapper>
  );
};

export default AttendanceGuests;
