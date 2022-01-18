import React from "react";
import TitleSection from "../TitleSection";
import Accordion from "../../atoms/accordion";

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 text-white">
      <TitleSection title="FAQ" subtitle="All you need is ask" classes="mb-4" />
      <div className="w-full pt-4">
        <div className="w-full mx-auto text-white rounded-2xl">
          <Accordion
            title="How can I mint a Drago?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="Can I mint on my phone?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What is the utility of the Dragos?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="How many Dragos can I mint at a time?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <hr className="border-pink"/>
          <Accordion
            title="Will there be a secondary minting phase?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
