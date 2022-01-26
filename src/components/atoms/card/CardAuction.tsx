import React from "react";
import { ICardAuction } from "../../utils/types";
import { BsCheck } from "react-icons/bs";

const CardAuction: React.FC<ICardAuction> = ({
  title,
  author,
  authorVerified,
  image,
  date,
  expired,
  bidPrice,
  icon,
}) => {
  return (
    <div className="relative bg-navy-ascent rounded-lg duration-500 transform hover:scale-105 neon_simple">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="" src={image} alt="Sunset in the mountains" />
        <div className="flex">
          <div className="flex flex-row flex-none grow-0 items-center my-2 mx-auto">
            <img
              src={icon}
              alt="card icon, represents a class element"
              style={{ height: "25px", width: "25px" }}
              className="flex-none"
            />
            <span className="flex-none pl-3 py-1 text-lg font-bold text-pink">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAuction;
