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
}) => {
  return (
    <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="bg-no-repeat bg-center bg-cover rounded-lg pt-60 px-4 pb-14"
      ></div>
      <div className="bg-white p-3 rounded-lg">
        <a href="#" className="font-semibold text-pink text-lg">
          {title}
        </a>
        <ul className="flex flex-row flex-wrap mb-1 items-center">
          <li className="flex-grow-0 flex-shrink flex flex-row flex-nowrap items-center mr-3">
            <h6 className="text-sm text-gray-500">{author}</h6>
            {authorVerified && (
              <span
                style={{ height: "12px", width: "12px" }}
                className="bg-blue-400 text-white rounded-full ml-1 relative block"
              >
                <i
                  className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
                  style={{ fontSize: "10px" }}
                >
                  <BsCheck />
                </i>
              </span>
            )}
          </li>

          <li className="flex-grow-0 flex-shrink">
            <span className="text-sm font-semibold mr-1 text-gray-500">
              last bid:
            </span>
            <span className="text-sm text-purple">{bidPrice} eth</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardAuction;
