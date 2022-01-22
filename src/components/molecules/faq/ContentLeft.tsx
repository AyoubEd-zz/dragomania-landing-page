import React from "react";
import TitleSection from "../TitleSection";
import Accordion from "../../atoms/accordion";

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 text-white">
      <TitleSection title="FAQ" subtitle="All you need is ask" classes="mb-4 colorfull_text arrow_title_left" />
      <div className="w-full pt-4">
        <div className="w-full mx-auto text-white rounded-2xl">
          <Accordion
            title="What is Dragomania?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What are the Dragos?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What is Own-to-Earn?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What are the traits of Dragos?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="How many Dragos will there be Dragos to mint?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="WhEN MINT?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What is the price of the Mint?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="Will there be a secondary market for Dragos?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="Why Solana?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
