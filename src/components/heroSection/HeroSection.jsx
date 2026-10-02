import React from 'react'
import './heroSection.css'
import HeroRight from './HeroRight'
import HeroLeft from './HeroLeft'

const HeroSection = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="hero_section common_align">
                <HeroRight />
                <HeroLeft />
            </div>
        </div>
    </>
  )
}

export default HeroSection