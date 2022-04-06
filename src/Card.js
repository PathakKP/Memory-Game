import React from 'react'
import './Card.css'

const Card = ({listItem,increaseCount}) => {
  return (
    <div className='Card' onClick={()=>increaseCount(listItem.id)}>
        <img id={listItem.id} src={listItem.img} alt='nft' className='nft_image' />
    </div>
  )
}

export default Card