import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({
  episodeImageUrl,
  episodeTitle,
  subtitleImageUrl,
  propLeft,
  propTop,
  propLeft1,
  propWidth,
  propWidth1,
  propLeft2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const shakunetsuKabaddiStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  const subtituladoStyle = useMemo(() => {
    return {
      width: propWidth1,
      left: propLeft2,
    };
  }, [propWidth1, propLeft2]);

  return (
    <div className="rectangle-parent" style={frameDivStyle}>
      <img className="frame-item" alt="" src={episodeImageUrl} />
      <div className="frame-inner" />
      <div className="shakunetsu-kabaddi-" style={shakunetsuKabaddiStyle}>
        {episodeTitle}
      </div>
      <div className="hd-icon">
        <div className="hd">HD</div>
      </div>
      <div className="lengendado">
        <div className="subtitulado" style={subtituladoStyle}>
          {subtitleImageUrl}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
