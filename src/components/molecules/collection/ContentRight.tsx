import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";
import wings from "../../utils/images/icon/wings.png";
import mouth from "../../utils/images/icon/mouth.png";
import eye from "../../utils/images/icon/eye.png";
import horn from "../../utils/images/icon/horn.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Elements: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2">
        <CardFeature title="Wings" icon={wings} />
      </div>

      <div className="flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2">
        <CardFeature title="Muzzle" icon={mouth} />
      </div>

      <div className="flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2">
        <CardFeature title="Horn" icon={horn} />
      </div>

      <div className="flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2">
        <CardFeature title="Eyes" icon={eye} />
      </div>
    </div>
  );
};

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection
        title="An innovative fun to play play-to-earn game"
        subtitle="Welcome to Dragomania"
        classes="mb-4"
      />
      {/* <Carousel showStatus={false}>
        <Elements />
        <Elements />
      </Carousel> */}
      <div className="mt-10 text-white">
        Delivering a high-quality Play-to-Earn gaming experience that supports
        the player centric ecosystem via a robust tokenomics structure is our
        mission.
        <br />
        <br />
        DragoMania is a fun, intuitive, easy to learn but difficult to master
        and addictive game. The Non-repetitive Gameplay focuses on Strategy and
        Tactics, where skills matter as much as your character’s stats and
        attributes.
        <br />
        <br />
        Each experience and battle in the game is uniquely different from one
        another.
      </div>
    </div>
  );
};

export default ContentRight;
