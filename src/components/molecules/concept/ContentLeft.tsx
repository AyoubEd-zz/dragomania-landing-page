import React from 'react'
import TitleSection from "../TitleSection";

const ContentLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
        <TitleSection title="Why Solana?" subtitle="Scale for global adoption" classes="mb-4" />

        <div className="flex flex-row flex-wrap" style={{ color: "white" }}>
            Solana is currently one of the fastest and most scalable blockchains in
            the world and ideal for gaming. Solana can process more than 50,000
            transactions per second (TPS) and extremely low transaction fees
            (~0.00001). These technological advancements make Solana the best
            candidate for gaining mass adoption and translate to smoother end-user
            experiences.
        </div>
        </div>
    )
}

export default ContentLeft
