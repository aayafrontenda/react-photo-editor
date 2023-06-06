import React from 'react'

export default function Slider({min, max, value, handleChange, style}) {
  return (
    <div className='slider-container'>
        <input style={style} type='range' min={min} max={max} onChange={handleChange} value={value} className='slider'></input>
    </div>
  )
}
