import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import AttendanceGuests from "../AttendanceGuests/index";

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
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
