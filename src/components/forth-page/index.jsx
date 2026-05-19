import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import AttendanceGuests from "../AttendanceGuests/index";
import Color1 from "../../assets/image/colors/color1.jpg";
import Color2 from "../../assets/image/colors/color2.jpg";
import Color3 from "../../assets/image/colors/color3.jpg";
import Color4 from "../../assets/image/colors/color4.jpg";
import Color5 from "../../assets/image/colors/color5.jpg";
import Color6 from "../../assets/image/colors/color6.jpg";
import Color7 from "../../assets/image/colors/color7.jpg";
import Color8 from "../../assets/image/colors/color8.jpg";
import Color9 from "../../assets/image/colors/color9.jpg";
import Color10 from "../../assets/image/colors/color10.jpg";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Հովհաննես Մկրտիչ եկեղեցի"}
            mapSrc={
              "https://yandex.com/maps/org/244434754384?si=99rfywu4yaaqvzk3p9xc5buwdr "
            }
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Օդեսա ռեստորանային և հյուրանոցային համալիր"}
            mapSrc={
              "https://yandex.com/maps/org/240838873838?si=99rfywu4yaaqvzk3p9xc5buwdr "
            }
          />
        </ForthPagePartContext>
        {/* <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px] grayscale contrast-125 brightness-105"
          />
        </div> */}
      </Container>

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
          հարմարավետ կոշիկներ` պարելու համար:
          <br />
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <h2 className="text-center">Dress Code</h2>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {[
            Color1,
            Color2,
            Color3,
            Color4,
            Color5,
            Color6,
            Color7,
            Color8,
            Color9,
            Color10,
          ].map((color, index) => (
            <div
              key={index}
              className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-white shadow-lg"
            >
              <img
                src={color}
                alt={`color-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
