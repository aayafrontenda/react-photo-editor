import React from 'react'

export default function SidebarItem({ active, handleClick, name }) {
  return (
    <button 
        onClick={handleClick} 
        className={`sidebar-item ${active ? 'active' : ''}`}
    >{name}</button>
  )
}
