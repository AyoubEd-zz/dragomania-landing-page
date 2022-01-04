import React from "react";
import Collection from "./components/organisms/collection";
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

      <div className="py-20 bg-navy-secondary">
        <Collection />
      </div>

      <div className="py-20 bg-navy-secondary">
        <LatestAuction />
      </div>

      <div className='mb-20'>
        <Solana />
      </div>

      <div className='mt-20'>
        <Story />
      </div>

      <div className='my-20'>
                <RoadMap />
      </div>

      <div className='bg-navy-secondary'>
        <Faq />
      </div>

      <div className='mt-20'>
        <Team />
      </div>

      <div className='mt-20'>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
