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
      {/* <div
        style={{ backgroundImage: `url('${image}')`, width: '100%', transform: 'scale(.8)' }}
        className="bg-no-repeat bg-center bg-cover rounded-lg pt-60 px-4 pb-14"
      ></div>
      <div className="bg-transparent p-3 rounded-lg">
        <ul className="flex flex-row mb-1 content-center mx-auto">
          <li className="flex-grow-0 flex-shrink flex flex-row flex-nowrap items-center mr-3">
            <img src={icon} alt="card icon, represents a class element" style={{height: '25px'}}/>
          </li>
          <li className="flex-grow-0 flex-shrink flex flex-row flex-nowrap mr-3">
            <a href="#" className="font-semibold text-pink text-lg">
              {title}
            </a>
          </li>
        </ul> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={image} alt="Sunset in the mountains"/>
  {/* <div className="px-6 py-4"> */}
    {/* <div className="font-bold text-pink text-xl mb-2">{title}</div> */}
    {/* <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p> */}
  {/* </div> */}
  <div className="py-1 rounded-md m-1">
    <img src={icon} alt="card icon, represents a class element" style={{height: '35px', width: '35px'}}/>
    <span className="inline-block px-3 py-1 text-lg font-bold text-pink">{title}</span>
  </div>
{/* </div> */}
        {/* <ul className="flex flex-row flex-wrap mb-1 items-center">
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
        </ul> */}
      </div>
    </div>
  );
};

export default CardAuction;
