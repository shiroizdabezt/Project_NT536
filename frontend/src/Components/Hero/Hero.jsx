import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon_1.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image_1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>SPECIAL OFFERS</h1>
            <div>
                <div className="hero-hand-icon">
                    <p>SALES UP TO</p>
                    <img src={hand_icon} alt='' />
                </div>
            </div>
            {/* <p>collections</p>
            <p>for everyone</p> */}
            <div className="hero-lasted-btn">
            <div>Visit Now</div>
            <img src={arrow_icon} alt=''></img>
        </div>
        </div>
        
        <div className="hero-right">
            <img src={hero_image} alt=''></img>
        </div>
    </div>
  )
}

export default Hero