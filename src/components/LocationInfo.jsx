import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {
  return (
    <section className='LocationInfo'>
        <h2 className='LocationInfo__name'>{location?.name}</h2>
        <ul className='LocationInfo__list'>
          <li className='LocationInfo__item'><span>Type:</span> {location?.type}</li>
          <li className='LocationInfo__item'><span>Dimension:</span> {location?.dimension}</li>
          <li className='LocationInfo__item'><span>Population:</span> {location?.residents.length}</li>
        </ul>
      </section>
  )
}

export default LocationInfo