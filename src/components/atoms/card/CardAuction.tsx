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
    <div className="relative bg-navy-ascent rounded-lg duration-500 transform hover:scale-105">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className="flex flex-row px-14 py-2 items-center rounded-lg my-2 mx-2 border-x border-y border-pink">
          <img
            src={icon}
            alt="card icon, represents a class element"
            style={{ height: "25px", width: "25px" }}
          />
          <span className="inline-block px-3 py-1 text-lg font-bold text-pink">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAuction;
