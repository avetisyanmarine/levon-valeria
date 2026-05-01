import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-19 text-[#2D2929] maintext">
            <p>Հարսանյաց Հրավեր</p>
            <h3>Արման & Նունե</h3>
            <p>05.06.2026</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
