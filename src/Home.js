import React, { useState } from 'react'
import Card from './Card'
import './Home.css'

const Home = ({card_list,increaseCount}) => {

    

  return (
    <div className="home">
        <div className="display_nft">
            {card_list.map((list_item)=>{
               return <Card  listItem={list_item}  increaseCount={increaseCount} />
            })
            } 
            
        </div>
    </div>
  )
}

export default Home