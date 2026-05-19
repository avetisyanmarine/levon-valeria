import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-125 text-[#cdcaca] maintext">
            <p>Wedding Day</p>
            <h3>Levon & Valeria</h3>
            <p>08.08.2026</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
