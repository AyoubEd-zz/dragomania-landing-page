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
import Companies from "./components/organisms/companies";

function App() {
  return (
    <div className="container_eggs">
      <Navigation />

      <div className="py-20  zoom_out" id="game" style={{paddingTop: '80px'}}>
        <Collection />
      </div>

      <div className='mb-20 zoom_out' id="solana" style={{paddingTop: '80px'}}>
        <Solana />
      </div>

      <div className=" zoom_out" id="auction" style={{paddingTop: '80px'}}>
        <LatestAuction />
      </div>

      <div className="p2e zoom_out" style={{paddingTop: '80px'}}>
        <Concept />
      </div>

      <div className='mt-20 zoom_out' id="story" style={{paddingTop: '80px'}}>
        <Story />
      </div>

      <div className='my-20 zoom_out' id="roadmap" style={{paddingTop: '80px'}}>
        <RoadMap />
      </div>

      <div className='mt-20 zoom_out' id="team" style={{paddingTop: '80px'}}>
        <Team />
      </div>

      <div className='mt-20 zoom_out' id="companies">
        <Companies />
      </div>
      
      <div className=' pt-20 zoom_out' id="faq" style={{paddingTop: '80px'}}>
        <Faq />
      </div>

      <div className='mt-20 zoom_out' id="footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
