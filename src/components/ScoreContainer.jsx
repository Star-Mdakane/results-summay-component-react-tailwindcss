import React from 'react'
import ScoreCircle from './ScoreCircle';
const ScoreContainer = () => {
    return (
        <section className='flex items-center justify-center w-full h-89 md:w-84.5 md:h-full lg:w-92 bg-linear-to-t to-[#7755ff] from-[#2f2ce9] rounded-b-4xl md:rounded-4xl'>
            {/* Result content */}
            <div className='flex flex-col gap-6 md:gap-8 w-65 md:w-50 lg:w-65'>
                <p className='text-[18px] md:text-[24px] text-center text-blue-200 font-bold leading-[130%] tracking-[0px]'>
                    Your Result
                </p>
                {/* Score circle */}
                <ScoreCircle />
                {/* Score description */}
                <div className="fex flex-col gap-2">
                    <p className='text-[24px] md:text-[32px] text-center text-white font-bold leading-[130%] tracking-[0px]'>
                        Great
                    </p>
                    <p className='text-[16px] md:text-[18px] text-center text-blue-200 font-bold leading-[130%] tracking-[0px]'>
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ScoreContainer;