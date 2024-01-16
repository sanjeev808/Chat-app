import React from 'react'
import "./myStyle.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from "@mui/material";

export default function CreateGroup() {
  return (
    <div className='create-group-container'>
      <input placeholder='Enter group name' className='search-box'/>
    <IconButton >
      <DoneOutlineIcon />
    </IconButton>
     </div>
  )
}
