import React from "react";
import TitleSection from "../TitleSection";

const ContentRight: React.FC = () => {
  return (
    <div className='container mx-auto flex flex-col flex-nowrap items-center flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0 items-center'>
      <TitleSection
        title="OWN-TO-EARN"
        subtitle=""
        classes="mb-4 colorfull_text"
      />

      <div className="text-muted flex flex-row flex-wrap">
        <ul className="list">
          <li
            style={{
              listStyle: "none",
              padding: "5px 0 5px 30px",
              position: "relative",
            }}
          >
            <div className="relative">
              <div className="text-pink text-xl">
                Holders of Genesis Dragos will receive Royalties from our future comic books, games, cartoons
              </div>
              <div className="text-white">
                <br />
                {/* The NFTs release date will be announced soon, on our official
                social networks (Twitter, Discord, Medium). We are working close
                with our community to develop cool features. */}
              </div>
            </div>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "5px 0 5px 30px",
              position: "relative",
            }}
          >
            <div className="relative">
              <div className="text-pink text-xl">
                Airdrops of our governance token, special in-game assets, skins, Ornaments, and much more!
              </div>
              <div className="text-white">
                <br />
                {/* The NFTs release date will be announced soon, on our official
                social networks (Twitter, Discord, Medium). We are working close
                with our community to develop cool features. */}
              </div>
            </div>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "5px 0 5px 30px",
              position: "relative",
            }}
          >
            <div className="relative">
              <div className="text-pink text-xl">
                Players will eventually be able to lend out their Dragos through our DragoLoan program and make passive income
              </div>
              <div className="text-white">
                <br />
                {/* The NFTs release date will be announced soon, on our official
                social networks (Twitter, Discord, Medium). We are working close
                with our community to develop cool features. */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentRight;
