import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2 style={{marginBottom: "40px"}}>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Haverjutyun}
            number={"11:30"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="Քանաքեռ 17փ. 12/2 տուն"
          />
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Church}
            number={"13:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Հովհաննես Մկրտիչ եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={80}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Օդեսա ռեստորանային և հյուրանոցային համալիր"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
