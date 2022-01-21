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
    <div className="relative bg-navy-ascent rounded-lg duration-500 transform hover:scale-105" style={{height: '300px', width: '250px'}}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full object-center" src={image} alt="Sunset in the mountains" style={{height: '200px', width: '200px'}} />
          <div className="py-1 rounded-md m-1">
            <img className="object-center" src={icon} alt="card icon, represents a class element" style={{height: '35px', width: '35px'}}/>
            <span className="inline-block px-3 py-1 text-lg font-bold text-pink object-center">{title}</span>
          </div>
        </div>
    </div>
  );
};

export default CardAuction;
