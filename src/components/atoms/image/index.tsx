import React from "react";
import { IImage } from "../../utils/types";

const CardImage: React.FC<IImage> = ({
  image,
}) => {
  return (
    <div className="relative p-3 rounded-lg">
      <img src={image} alt="team member"
        className="rounded-lg"
        style={{maxHeight:"140px", maxWidth:"170px", position: "relative", top: "50%", transform: "translateY(-50%)"}}
      />
      
    </div>
  );
};

export default CardImage;
