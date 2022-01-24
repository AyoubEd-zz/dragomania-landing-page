import React from "react";
import { ICardTeam } from "../../utils/types";
import { BsLinkedin } from "react-icons/bs";
import ReadMore from "../readmore/readmore"

const CardAuction: React.FC<ICardTeam> = ({
  title,
  author,
  image,
  date,
  link,
}) => {
  return (
    <div className="relative p-3 rounded-lg">
      <img src={image} alt="team member"
        className="rounded-lg"
      />
      <div className="bg-transparent p-3 rounded-lg">
        <ul className="flex flex-row flex-wrap mb-1 items-center">
          <li className="flex-grow-0 flex-shrink mr-2">
            <a href="#" className="font-semibold text-pink text-lg" >
              {title}
            </a>
          </li>

        </ul>

        <ul className="flex flex-row flex-wrap mb-1 items-center">
          <li className="flex-grow-0 flex-shrink flex flex-row flex-nowrap items-center mr-3">
            <a href={link} target="_blank">
              <h6 className="text-sm text-gray-500 hover:underline">{author}</h6>
            </a>
          </li>
        </ul>
      <div className="text-white">
          <ReadMore 
                text={date}
                min={90}
                ideal={90}
                max={100} 
          />
      </div>
    </div>
  </div>
  );
};

export default CardAuction;
