import React from 'react'
import FxRates from '../../assets/FX rates.svg'
import SpeedGuaranteed from '../../assets/speed guaranteed.svg'
import Custody from '../../assets/security.svg'

const FeatureContent = [
    {
        image: FxRates,
        topic: "Real mid-market FX rates",
        description: "Zero markup, verified directly against Reuters & Bloomberg interbank rates.",
        altText: "Fxrates_icon",
        id: 1
    },
    {
        image: SpeedGuaranteed,
        topic: "Speed guaranteed",
        description: "Arrives within 4 hours or all transfer fees are refunded automatically.",
        altText: "SpeedGuaranteed_icon",
        id: 2
    },
    {
        image: Custody,
        topic: "Bank-grade custody",
        description: "Regulated by FinCEN & held in segregated partner accounts at Tier-1 banks.",
        altText: "Custody_icon",
        id: 3
    }
]

const HeroFeatureCard = () => {
  return (
        <div className="hero_features">

            {
                FeatureContent.map((heroFeature) => {
                    return (
                        <div className="featureCard" key={heroFeature.id}>
                            <img src={heroFeature.image} alt={heroFeature.altText} />
                            <div className="content">
                                <p className="topic">{heroFeature.topic}</p>
                                <p className="description">{heroFeature.description}</p>
                            </div>
                        </div>
                    )
                }

                )
            }
            
        </div>
    
  )
}

export default HeroFeatureCard