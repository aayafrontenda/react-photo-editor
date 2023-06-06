import React, { useState } from 'react';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
];

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOption = options[activeIndex];

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    })
    
    return {
      filter: filters.join(' ')
    };
  }

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map(
        (option, index) => {
          if (index !== activeIndex) return option;
          return { ...option, value: target.value };
        }
      );
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='main-image' style={getImageStyle()}/>
        <div className="sidebar">
          {
            options.map((option, index) => <SidebarItem handleClick={() => setActiveIndex(index)} active={activeIndex === index} key={index} name={option.name} />)
          }
        </div>
        <Slider 
          min={activeOption.range.min}
          max={activeOption.range.max}
          value={activeOption.value}
          handleChange={handleSliderChange}
        />
      </div>      
    </div>
  );
}

export default App;
