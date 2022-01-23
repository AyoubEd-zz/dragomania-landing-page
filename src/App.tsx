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

      <div className="py-20 " id="game" style={{paddingTop: '80px'}}>
        <Collection />
      </div>

      <div className='mb-20' id="solana" style={{paddingTop: '80px'}}>
        <Solana />
      </div>

      <div className="" id="auction" style={{paddingTop: '80px'}}>
        <LatestAuction />
      </div>

      <div className="p2e" style={{paddingTop: '80px'}}>
        <Concept />
      </div>

      <div className='mt-20' id="story" style={{paddingTop: '80px'}}>
        <Story />
      </div>

      <div className='my-20' id="roadmap" style={{paddingTop: '80px'}}>
        <RoadMap />
      </div>

      <div className='mt-20' id="team" style={{paddingTop: '80px'}}>
        <Team />
      </div>

      <div className='mt-20' id="companies" style={{paddingTop:  '60px'}}>
        <Companies />
      </div>
      
      <div className=' pt-20' id="faq" style={{paddingTop: '80px'}}>
        <Faq />
      </div>

      <div className='mt-20' id="footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
