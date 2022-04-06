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
            <strong>{currentScore}</strong>
              </div>
            <div className="high_score"><strong>{highScore}</strong> </div>
        </div>
    </div>
  )
}

export default Header