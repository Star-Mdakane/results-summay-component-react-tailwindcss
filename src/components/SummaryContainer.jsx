import React from 'react'
import SummaryList from './SummaryList'
import ContinueButton from './ContinueButton'

const SummaryContainer = () => {
    return (
        <section className='w-93.75 h-100 flex flex-col items-center justify-center  mx-auto md:w-87 md:h-128 lg:w-92 mb-7.5 md:mb-0'>
            {/* Summary content */}
            <div className='flex flex-col w-78.75 md:w-67 lg:w-72 gap-6 md:gap-8'>
                <p className='text-[18px] md:text-[24px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                    Summary
                </p>
                {/* Summary Items */}
                <SummaryList />
                <ContinueButton />
            </div>
        </section>
    )
}

export default SummaryContainer