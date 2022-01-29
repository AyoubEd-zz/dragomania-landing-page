import React from "react";
import TitleSection from "../TitleSection";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection
        title="An Innovative Play-and-Earn Game"
        subtitle="Welcome to Dragomania"
        classes="mb-4 colorfull_text arrow_title_left_no"
      />
      <div className="mt-10 text-muted text-xl">
        Dragomania is a fun-to-play-to-earn game partially owned and operated by its players. Where players can come together, collect adorable and cool Dragos as NFTs to play, earn and live. Build up a collection to battle, breed, collect, raise, and build kingdoms for your Dragos. 
        <br />
        <br />
        Dragomania offers an enjoyable and familiar gaming experience, without complicated blockchain jargon. And aims to establish itself as a leader in this revolutionary NFT Gaming space. 
        <br />
        <br />
        We believe that now is the time for blockchain games to feel like the beloved video games that we grew up with!
      </div>
    </div>
  );
};

export default ContentRight;
