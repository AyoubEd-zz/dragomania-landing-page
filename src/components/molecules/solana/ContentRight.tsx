import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";
import wings from "../../utils/images/icon/wings.png";
import mouth from "../../utils/images/icon/mouth.png";
import eye from "../../utils/images/icon/eye.png";
import horn from "../../utils/images/icon/horn.png";

const Elements: React.FC = () => {
  return (
    <div className='flex flex-grow flex-row flex-wrap w-full'>
                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='1,731'
                        icon="Transactions per second"
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='52 M+'
                        icon="Total Transactions"
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='$0.00025'
                        icon="Avg. cost per transaction"
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='1,412'
                        icon="Validator nodes"
                    />
                </div>
            </div>
  );
};

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection title="Why Solana?" subtitle="Scale for global adoption" classes="mb-4" />

      <div className="flex flex-row flex-wrap text-muted text-lg">
        Solana is currently one of the fastest and most scalable blockchains in
        the world and ideal for gaming. Solana can process more than 50,000
        transactions per second (TPS) and extremely low transaction fees
        (~0.00001). These technological advancements make Solana the best
        candidate for gaining mass adoption and translate to smoother end-user
        experiences.
        <br/>
        <br/>
        <Elements />
      </div>
    </div>
  );
};

export default ContentRight;
