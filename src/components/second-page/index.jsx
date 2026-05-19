import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import Photo2 from "../../assets/image/savethedate.png";
import BlockImage from "../../assets/image/blockimage.jpg";
import PhotoF1 from "../../assets/image/photof1.jpg";
import PhotoGroup1 from "../../assets/image/groupphoto1.jpg";
import PhotoGroup2 from "../../assets/image/groupphoto2.jpg";
import PhotoGroup3 from "../../assets/image/groupphoto3.jpg";
import LineAes from "../../assets/image/lineaes.png";
import { ThirdPagePartCalendar } from "../third-page/styled";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 7, 8, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in">
            Հարսանիքին մնաց
          </h2>
          <GridDiv>
            <Flexible data-aos="flip-up">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible
              className="uniqueBorder"
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
        </div>

        <div
          className="bg-[#ffffff] rounded-[15px] w-[271px] h-[358px] mt-[50px] mx-auto drop-shadow-2xl flex flex-col items-center justify-center gap-4 p-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img src={BlockImage} className="mt-[6px] grayscale" alt="" />
          <p className="font-[600] text-[22px] text-center">
            Ціле життя плюс <br /> ціла вічність{" "}
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex h-[100vh] my-11 gap-[20px]">
          <div>
            <img src={Photo2} className="h-[100vh]" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={PhotoGroup1} alt="" className="h-1/3 object-cover" />
            <img src={PhotoGroup2} alt="" className="h-1/3 object-cover" />
            <img src={PhotoGroup3} alt="" className="h-1/3 object-cover" />
          </div>
        </div>
        <div className="mt-10 mb-7 ">
          <h2 style={{ fontSize: "49px" }} className="mb-5" data-aos="zoom-in">
            Любі гості
          </h2>
          <Flexible className="font-[600]">
            <p className="text-[20px]">
              Ми з любов’ю запрошуємо Вас бути присутніми на нашому весільному
              святі та розділити з нами нашу радість.
            </p>
          </Flexible>
          <hr className="my-5" />
          <h2 style={{ fontSize: "32px" }} className="mb-5">
            Սիրելի հյուրեր
          </h2>

          <Flexible className="font-[600]">
            <p className="text-[18px]">
              Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանեկան տոնին և մեզ
              հետ կիսելու մեր կյանքի այս գեղեցիկ ու ուրախ օրը։
            </p>
          </Flexible>
        </div>
      </Container>
      <img src={LineAes} alt="" className="w-full" />
      <Container>
        <h2 className="mt-5" data-aos="zoom-in">
          Օգոստոս
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"].map((day) => (
            <div
              className="font-bold text-center py-2 mb-3"
              style={{ fontSize: "16px" }}
            >
              {day}
            </div>
          ))}
          {[...Array(37)].map((_, i) =>
            i > 4 && i <= 35 ? (
              <div className={i - 4 == 8 ? "special" : ""}>{i - 4}</div>
            ) : (
              <div className=""></div>
            ),
          )}
        </ThirdPagePartCalendar>
        <img src={PhotoF1} alt="" className="rounded-[15px] mt-[50px]" />
      </Container>
    </SecondPagePart>
  );
};
