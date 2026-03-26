import React from 'react'

const ScoreCircle = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-auto w-35 h-35 md:w-50 md:h-50 bg-linear-to-t from-[#7755FF] to-[#2F2CE9] rounded-full'>
            <p className='text-[56px] md:text-[72px] text-white font-bold md:font-extrabold leading-[100%] tracking-[0px]'>
                76
            </p>
            <p className='text-[16px] md:text-[18px] text-blue-200 font-bold leading-[130%] tracking-[0px]'>
                of 100
            </p>
        </div>
    )
}

export default ScoreCircle