import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";

const Content: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 mx-auto roadmap">
      <TitleSection title="ROADMAP" subtitle="Game" classes="mb-4 colorfull_text arrow_title_left" />
      <ul className="list">
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">01.</div>
            <div className="text-white text-lg">
              <br />
              -	Project Concept & Idea 
              <br />
              - Team Sourcing
              <br />
              -	Project Development
            </div>
          </div>
        </li>

        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg relative duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">02.</div>
            <div className="text-white text-lg">
              <br />
              -	Private Sale
              <br />
              -	Partnerships and Marketing
              <br />
              -	Genesis Dragos NFT sale
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">03.</div>
            <div className="text-white text-lg">
              <br />
              -	Governance token launch and airdrops
              <br />
              -	Dragoloan and In-house NFT Marketplace
              <br />
              -	Breeding Game Launch
              <br />
              -	PvP Battle Game Launch with ladder and tournaments
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">04.</div>
            <div className="text-white text-lg">
              <br />
              -	PvE Adventure Mode
              <br />
              -	Land presale 
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">05.</div>
            <div className="text-white text-lg">
              <br />
              -	Unified Land and Dragos marketplace
              <br />
              -	Dragos Upgrade system
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">06.</div>
            <div className="text-white text-lg">
              <br />
              -	Land Gameplay
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Content;
