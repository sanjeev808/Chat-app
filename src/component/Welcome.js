import React from 'react'
import chat_icon from "../icons/chat_icon.png"
export default function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={chat_icon} alt='logo'  className='welcome-logo'/>
        <p> view and text  directly to people present in the chat rooms</p>
    </div>
  )
}
