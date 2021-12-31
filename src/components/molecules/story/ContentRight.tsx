import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection title="2084, Arkadia." subtitle="Story" classes="mb-4" />

      <div className="flex flex-row flex-wrap" style={{ color: "white" }}>
        If we are to believe the many frozen images of the past buried in the
        rubble, Arkadia was populated for thousands of years by a species of
        featherless bipeds with big heads dominated by technology. However, in
        the year 2020, a strange virus seems to have got the better of them and
        caused bursts of panic and conflicts. Chaos erupted very quickly and led
        to a nuclear conflict. The atomic blasts eventually caused their
        disappearance. For centuries, this so-called "human" species has sought
        to discover the legendary creatures counted by mysterious tales, “The
        Dragos". But it is unfortunately only after their extinction that these
        mythical creatures filling the legends of another time… have surfaced.
        After centuries of reign of silence reasoning from a world in exile, the
        Elemental Dragos have made their appearance on earth, from the den of
        the mountains that the first generations emerged from obscurity. Plants,
        water, fire, thunder, wind and metal are the primordial elements
        mastered by Dragos. With their odd appearance and behavior, they seem
        very different from what humans had imagined. They seem to be a
        little... immature... Uh... more like... completely manic little
        dragons!
        <br />
        <br />
        If we are to believe the many frozen images of the past buried in the
        rubble, Arkadia was populated for thousands of years by a species of
        featherless bipeds with big heads dominated by technology. However, in
        the year 2020...
      </div>
    </div>
  );
};

export default ContentRight;
