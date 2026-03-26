import React from 'react'

const ListItem = ({ item }) => {

    return (
        <li key={item.score} className={`flex justify-between rounded-xl bg-${item.bg} p-4`}>
            {/* Label */}
            <div className='flex gap-4'>
                <img src={item.icon} alt="" />
                <p className={`text-[16px] md:text-[18px] text-${item.color} leading-[130%] tracking-[0px] font-medium`}>
                    {item.category}
                </p>
            </div>
            {/* Score */}
            <div className="flex gap-2">
                <p className='text-[16px] md:text-[18px] text-blue-950 font-bold leading-[130%] tracking-[0px]'>
                    {item.score}
                </p>
                <p className='text-[16px] md:text-[18px] text-blue-950/50 font-bold leading-[130%] tracking-[0px]'>
                    / 100
                </p>
            </div>
        </li>
    )
}

export default ListItem