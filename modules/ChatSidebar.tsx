import Archived from '@/components/Sidebar/Archived'
import Search from '@/components/Sidebar/Search'
import SidebarHeader from '@/components/Sidebar/SidebarHeader'
import React from 'react'

const ChatSidebar:React.FC = () => {
  return (
    <div className='w-full h-full'>
      <SidebarHeader />
      <Search />
      <Archived />
      {/* chat */}
    </div>
  )
}

export default ChatSidebar
