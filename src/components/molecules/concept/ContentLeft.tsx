import React from "react";
import TitleSection from "../TitleSection";

const ContentLeft: React.FC = () => {
  return (
    // <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0">
    <div className='container mx-auto flex flex-col flex-nowrap items-center flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0 items-center'>
      <TitleSection
        title="Play-to-Earn"
        subtitle=""
        classes="mb-4"
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
                Competing in battles to earn daily rewards
              </div>
              <div className="text-white">
                <br />
                {/* The NFTs release date will be announced soon, on our official
                social networks (Twitter, Discord, Medium). We are working close
                with our community to develop cool features. */}
              </div>
            </div>
          </li>
          <br/>
          <li
            style={{
              listStyle: "none",
              padding: "5px 0 5px 30px",
              position: "relative",
            }}
          >
            <div className="relative">
              <div className="text-pink text-xl">
                Breeding Dragos to produce new ones with particular Body Part combinations 
              </div>
              <div className="text-white">
                <br />
                {/* The NFTs release date will be announced soon, on our official
                social networks (Twitter, Discord, Medium). We are working close
                with our community to develop cool features. */}
              </div>
            </div>
          </li>
          <br/>
          <li
            style={{
              listStyle: "none",
              padding: "5px 0 5px 30px",
              position: "relative",
            }}
          >
            <div className="relative">
              <div className="text-pink text-xl">
                Collecting and speculating on rare Dragos such as Mystics and Genesis and Pure
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

export default ContentLeft;
