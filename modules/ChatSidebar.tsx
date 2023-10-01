import Archived from '@/components/Sidebar/Archived'
import Chat from '@/components/Sidebar/Chat'
import Search from '@/components/Sidebar/Search'
import SidebarHeader from '@/components/Sidebar/SidebarHeader'
import { AllUsersType } from '@/types'
import React from 'react'

type props = {
    data: AllUsersType
}
const ChatSidebar:React.FC<props> = ({data}) => {
    const { users } = data;
    
  return (
    <div className='w-full h-full'>
      <SidebarHeader />
      <Search />
      <Archived />
      {/* chat */}
      {
        !!users && users?.map((user: AllUsersType) =>
            <Chat key={user.id} data={user} />
        )
      }
      <div className='flex flex-col item-start justify-start text-gray-500 '>
        <p className='bg-stone'> This message is end-to-end encrypted </p>
      </div>
    </div>
  )
}

export default ChatSidebar
