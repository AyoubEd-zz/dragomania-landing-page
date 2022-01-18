import React from "react";
import { ICardTeam } from "../../utils/types";
import { BsCheck } from "react-icons/bs";
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'

const CardAuction: React.FC<ICardTeam> = ({
  title,
  author,
  authorVerified,
  image,
  date,
  link,
  expired,
  bidPrice,
}) => {
  return (
    <div className="relative p-3 rounded-lg">
      <img src={image} alt="team member"
        className="rounded-lg"
      />
      <div className="bg-transparent p-3 rounded-lg">
        <ul className="flex flex-row flex-wrap mb-1 items-center">
          <li className="flex-grow-0 flex-shrink mr-2">
        <a href="#" className="font-semibold text-pink text-lg">
          {title}
        </a>
        </li>
          <li className="flex-grow-0 flex-shrink flex flex-row flex-nowrap items-center mr-3">
            <a href={link} target="_blank">
              <h6 className="text-sm text-gray-500 hover:underline">{author}</h6>
            </a>
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
        </ul>
        <div className="text-white">
          {date}
        </div>
        {/* <ul className="flex flex-row flex-wrap mb-1 items-center">
          <li className="flex-grow-0 flex-shrink mr-2">
            <a
              className="text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative"
              href="#"
            >
              <i className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                <FaFacebookF />
              </i>
            </a>
          </li>

          <li className="flex-grow-0 flex-shrink mr-2">
            <a
              className="text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative"
              href="#"
            >
              <i className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                <BsTwitter />
              </i>
            </a>
          </li>

          <li className="flex-grow-0 flex-shrink mr-2">
            <a
              className="text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative"
              href="#"
            >
              <i className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                <BsInstagram />
              </i>
            </a>
          </li> */}

          {/* <li className="flex-grow-0 flex-shrink mr-2">
            <a
              className="text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative"
              href="#"
            >
              <i className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
                <RiLinkedinFill />
              </i>
            </a>
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default CardAuction;
