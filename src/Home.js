import React, { useState } from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Card from './Card'
import './Home.css'

const Home = ({card_list,increaseCount}) => {

    

  return (
    <div className="home">
        <TransitionGroup className="display_nft">
            {card_list.map((list_item)=>(
              <CSSTransition key={list_item.id} timeout={500} classNames='transition'>
             <Card  listItem={list_item}  increaseCount={increaseCount} />
             </CSSTransition>
  ))
 
            } 
            </TransitionGroup>
    </div>
  )
}

export default Home