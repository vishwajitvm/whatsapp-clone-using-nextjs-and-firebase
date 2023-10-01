"use client"
import { AccountCircle } from '@mui/icons-material'
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { IconButton } from '@mui/material'
import React from 'react'

const SidebarHeader:React.FC = () => {
  return (
    <div className="flex justify-evenly items-center px-2 py-4 h-20 border-r border-r-solid border-r-gray-200 border-b border-b-solid border-b-gray-200 bg-white z-10">
     <div className='pl-2'>
        <AccountCircle className='rounded-full cursor-pointer hover:opacity-70' />
     </div>

     <IconButton>
        <GroupsOutlinedIcon />
      </IconButton>
      <IconButton>
        <DataUsageIcon />
      </IconButton>
      <IconButton>
        <ChatOutlinedIcon />
      </IconButton>
    </div>
  )
}

export default SidebarHeader
