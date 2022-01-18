import React from "react";
import CardFeature from "../../atoms/card/CardFeature";
import TitleSection from "../TitleSection";

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection title="2084, Arkadia." subtitle="Story" classes="mb-4" />

      <div className="flex flex-row flex-wrap text-white text-lg">
        If we believe the many frozen images of the past buried in the rubble,
        Arkadia was once populated by a species of big-headed, featherless
        bipeds, dominated by technology. However, in the year 2020, a strange
        virus appeared, causing an outbreak of panic and confusion. Chaos
        erupted as the situation deteriorated, ultimately leading to a global
        nuclear conflict. It is believed that this atomic blast caused their
        disappearance.
        <br />
        <br />
        For centuries, this so-called “human” species sought to discover the
        legendary creatures recounted in lore, “The Dragos”. Unfortunately, it
        was only after the extinction of humans that these mythical creatures of
        legend have surfaced… After millenia of silence, the Elemental Dragos
        have re-emerged from their reasonable self-imposed exile. Plants, water,
        fire, thunder, wind and metal are the primordial elements mastered by
        Dragos.
        <br />
        <br />
        With their odd appearance and behavior, they’re very different from what
        humans imagined. They seem to be a little…immature..uh, more
        like…completely manic little dragons! 
        <br/>
        <br/>
        <span className="text-pink font-bold text-xl">Start your adventure. Collect the
        Dragos, Breed them, Raise them and join the battle!</span>
      </div>
    </div>
  );
};

export default ContentRight;
