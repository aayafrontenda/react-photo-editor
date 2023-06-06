import React from 'react'

export default function Slider({min, max, value, handleChange}) {
  return (
    <div className='slider-container'>
        <input type='range' min={min} max={max} onChange={handleChange} value={value} className='slider'></input>
    </div>
  )
}
