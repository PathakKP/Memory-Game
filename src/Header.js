import React from 'react'
import './Header.css'

const Header = ({currentScore,highScore}) => {
  return (
    <div className="header">
        <div className="title">
            <h2>NFT Memory Game</h2>
        </div>
        <div className="score">
            <div className="current_score">
              <p>Score: {currentScore}</p>
            
              </div>
            <div className="high_score">
              <p>Best: {highScore}</p> 
              </div>
        </div>
    </div>
  )
}

export default Header