import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";

const Content: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 mx-auto roadmap">
      <TitleSection title="2084, Arkadia." subtitle="Roadmap" classes="mb-4" />
      <ul>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105">
            <div className="text-pink">01.ROADMAP LAUNCH</div>
            <div className="text-white">
              Quality is the core value of the project.
              <br />
              <br />
              The NFTs release date will be announced soon, on our official
              social networks (Twitter, Discord, Medium). We are working close
              with our community to develop cool features.
            </div>
          </div>
        </li>

        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg relative duration-500 transform hover:scale-105">
            <div className="text-pink">
              02.NFTS MINTING AND OWN-TO-EARN LAUNCH
            </div>
            <div className="text-white">
              <b>Sale of 11,111 Dragos.</b> Their favorite occupation? To
              explore and battle for rule of the land.
              <br />
              Arkadia has become the theatre of an absurd combat spectacle armed
              with the mysterious Dragos, and their mania is definitely just
              beginning!
              <br />
              <br />
              <b>Own-To-Earn</b>. All owners of DragoMania NFTs will receive
              royalties from our future comics, games, cartoons. The project is
              currently under development.
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105">
            <div className="text-pink">03. PVE AND PVP MODE PLAY-TO-EARN</div>
            <div className="text-white">
              In the PvP Mode, join the “Koloseum” to battle other players
              around the world in various game modes: incentivized Battles,
              Friendly Battles, Training mode, E-sports and tournaments, and
              other innovative game modes are currently under development.
              <br />
              <br />
              In the PvE Mode, the Adventure mode features a rich open universe
              composed of different interconnected worlds. With each its own
              theme, an exciting storyline, mysteries and challenges, in which
              you can complete quests, battle monsters, conquer dungeons,
              explore new territories, caves, sanctuaries, towns, villages,
              plains, and much more. Offering countless incentivized challenges
              and activities.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Content;
