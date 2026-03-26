import React from 'react'
import ScoreContainer from './ScoreContainer'
import SummaryContainer from './SummaryContainer'

const Card = () => {
    return (
        <>
            <div className="flex flex-col w-93.75 md:w-171.5 md:h-128 md:flex-row lg:w-184 gap-6 md:gap-0 md:rounded-4xl bg-white shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] ">
                <ScoreContainer />
                <SummaryContainer />
            </div>
        </>
    )
}

export default Card