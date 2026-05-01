import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  line,
  imageSize,
}) => {
  return (
    <>
      <ThirdPageBlockPart
        style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "20px" }}
      >
        <ThirdPageBlockPartSvg line={line} className="flex">
          <img loading="lazy" src={ImageSrc} width={imageSize} />
          {!line && <div className="mb-2 mt-6 w-[1.5px] h-22.5 bg-[#292929]"></div>}
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext data-aos="fade-up">
          <h3>{bigText}</h3>
          <p>{smallText}</p>
          <h4>{number}</h4>
        </ThirdPagePartContext>
      </ThirdPageBlockPart>
    </>
  );
};
