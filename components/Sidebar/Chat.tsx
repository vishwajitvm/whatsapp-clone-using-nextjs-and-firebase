import { AllUsersType } from '@/types'
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
    data: AllUsersType
}

const Chat: React.FC<Props> = ({data}) => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white border-b border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
        <div className='flex justify-start items-center gap-4'>
        <Image
          src={ data?.image}
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className='flex item-center justify-between gap-4'>
        <div className='flex flex-col item-start justify-start'>
        <p className="text-gray-500 truncate w-4/5"> {data.firstName} {data.lastName} </p>
        <p className='text-gray-500 truncate w-4/5'> This is the lastest message </p>
        </div>
        <div>
            <p className='text-gray-500 text-sm text-right'> 10:39 </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Chat