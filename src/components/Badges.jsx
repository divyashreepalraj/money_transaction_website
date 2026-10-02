import React from 'react'

const Badges = (
    {
        className = "",
        context = "",
    }
) => {
  return (
    <>
    <div className="hero_badge"><span></span>Guaranteed mid-market rates • 0% hidden fees</div>
    <div className="stars_badge">
        Trustpilot <span><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /></span>
    </div>
    <div className="calc_badge"><span></span>Rates locked 30m</div>
    </>
  )
}

export default Badges