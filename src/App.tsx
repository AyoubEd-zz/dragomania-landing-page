import React from "react";
import Collection from "./components/organisms/collection";
import Concept from "./components/organisms/concept";
import Faq from "./components/organisms/faq";
import Footer from "./components/organisms/footer";
import LatestAuction from "./components/organisms/latestauction";
import Navigation from "./components/organisms/navigation";
import RoadMap from "./components/organisms/roadmap";
import Solana from "./components/organisms/solana";
import Story from "./components/organisms/story";
import Team from "./components/organisms/team";

function App() {
  return (
    <div>
      <Navigation />

      <div className="py-20 bg-navy-secondary" id="concept">
        <Collection />
      </div>

      <div className='mb-20' id="solana">
        <Solana />
      </div>

      <div className="bg-navy-secondary" id="auction">
        <LatestAuction />
      </div>

      <div className="bg-navy-secondary" id="earn">
        <Concept />
      </div>

      <div className='mt-20' id="story">
        <Story />
      </div>

      <div className='my-20' id="roadmap">
                <RoadMap />
      </div>

      <div className='mt-20' id="team">
        <Team />
      </div>

      <div className='bg-navy-secondary pt-20' id="faq">
        <Faq />
      </div>

      <div className='mt-20'>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
