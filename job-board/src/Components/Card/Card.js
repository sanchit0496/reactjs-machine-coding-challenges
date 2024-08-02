import React from 'react'
import './Card.css'

const Card = ({src, name, phone, email, address}) => {
  return (
    <div className='user-card'>
        <div className='left-side'>
            <img src={src} />
        </div>
        <div className='right-side'>
            <div className='description'>{`Name: ${name}`}</div>
            <div className='description'>{`Phone: ${phone}`}</div>
            <div className='description'>{`Email: ${email}`}</div>
            <div className='description'>{`Address: ${address}`}</div>
        </div>
    </div>
  )
}

export default Card