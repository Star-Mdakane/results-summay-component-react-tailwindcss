import React from 'react'

const Card = () => {
    return (
        <>
            <div className="flex flex-col w-93.75 md:w-171.5 md:h-128 md:flex-row lg:w-184 gap-6 md:gap-0 md:rounded-4xl bg-white shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] ">
                {/* Score container */}
                <section className='flex items-center justify-center w-full h-89 md:w-84.5 md:h-full lg:w-92 bg-linear-to-t to-[#7755ff] from-[#2f2ce9] rounded-b-4xl md:rounded-4xl'>
                    {/* Result content */}
                    <div className='flex flex-col gap-6 md:gap-8 w-65 md:w-50 lg:w-65'>
                        <p className='text-[18px] md:text-[24px] text-center text-blue-200 font-bold leading-[130%] tracking-[0px]'>
                            Your Result
                        </p>
                        {/* Score circle */}
                        <div className='flex flex-col items-center justify-center mx-auto w-35 h-35 md:w-50 md:h-50 bg-linear-to-t from-[#7755FF] to-[#2F2CE9] rounded-full'>
                            <p className='text-[56px] md:text-[72px] text-white font-bold md:font-extrabold leading-[100%] tracking-[0px]'>
                                76
                            </p>
                            <p className='text-[16px] md:text-[18px] text-blue-200 font-bold leading-[130%] tracking-[0px]'>
                                0f 100
                            </p>
                        </div>
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

                {/* Summary container */}
                <section className='w-93.75 h-100 flex flex-col items-center justify-center  mx-auto md:w-87 md:h-128 lg:w-92 mb-7.5 md:mb-0'>
                    {/* Summary content */}
                    <div className='flex flex-col w-78.75 md:w-67 lg:w-72 gap-6 md:gap-8'>
                        <p className='text-[18px] md:text-[24px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                            Summary
                        </p>
                        {/* Summary Items */}
                        <ul className='flex flex-col gap-4'>
                            {/* item 1 */}
                            <li className='flex justify-between rounded-xl bg-red-50 p-4'>
                                {/* Label */}
                                <div className='flex gap-4'>
                                    <img src="../assets/images/icon-reaction.svg" alt="" />
                                    <p className='text-[16px] md:text-[18px] text-red-400 leading-[130%] tracking-[0px] font-medium'>
                                        Reaction
                                    </p>
                                </div>
                                {/* Score */}
                                <div className="flex gap-2">
                                    <p className='text-[16px] md:text-[18px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                                        80
                                    </p>
                                    <p className='text-[16px] md:text-[18px] text-blue-950/50 font-bold leading-[130%] tracking-[0px]'>
                                        / 100
                                    </p>
                                </div>
                            </li>
                            {/* Item 2 */}
                            <li className='flex justify-between rounded-xl bg-yellow-50 p-4'>
                                {/* Label */}
                                <div className='flex gap-4'>
                                    <img src="../assets/images/icon-memory.svg" alt="" />
                                    <p className='text-[16px] md:text-[18px] text-yellow-400 leading-[130%] tracking-[0px] font-medium'>
                                        Memory
                                    </p>
                                </div>
                                {/* Score */}
                                <div className="flex gap-2">
                                    <p className='text-[16px] md:text-[18px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                                        92
                                    </p>
                                    <p className='text-[16px] md:text-[18px] text-blue-950/50 font-bold leading-[130%] tracking-[0px]'>
                                        / 100
                                    </p>
                                </div>
                            </li>
                            {/* Item 3 */}
                            <li className='flex justify-between rounded-xl bg-green-50 p-4'>
                                {/* Label */}
                                <div className='flex gap-4'>
                                    <img src="../assets/images/icon-verbal.svg" alt="" />
                                    <p className='text-[16px] md:text-[18px] text-green-500 leading-[130%] tracking-[0px] font-medium'>
                                        Verbal
                                    </p>
                                </div>
                                {/* Score */}
                                <div className="flex gap-2">
                                    <p className='text-[16px] md:text-[18px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                                        61
                                    </p>
                                    <p className='text-[16px] md:text-[18px] text-blue-950/50 font-bold leading-[130%] tracking-[0px]'>
                                        / 100
                                    </p>
                                </div>
                            </li>
                            {/* Item 4 */}
                            <li className='flex justify-between rounded-xl bg-blue-50 p-4'>
                                {/* Label */}
                                <div className='flex gap-4'>
                                    <img src="../assets/images/icon-visual.svg" alt="" />
                                    <p className='text-[16px] md:text-[18px] text-blue-800 leading-[130%] tracking-[0px] font-medium'>
                                        Visual
                                    </p>
                                </div>
                                {/* Score */}
                                <div className="flex gap-2">
                                    <p className='text-[16px] md:text-[18px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                                        73
                                    </p>
                                    <p className='text-[16px] md:text-[18px] text-blue-950/50 font-bold leading-[130%] tracking-[0px]'>
                                        / 100
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <button className='bg-blue-950 text-[18px] leading-[130%] tracking-[0px] text-white rounded-[128px] p-4 font-bold'>
                            Continue
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Card