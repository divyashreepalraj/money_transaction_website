import Star from '../../assets/star.svg'
import HeroFeatureCard from './HeroFeatureCard'


const HeroRight = () => {
  return (
        <div className="right_side">
        <div className="hero_badge"><span></span>Guaranteed mid-market rates • 0% hidden fees</div>
        <h2 className="herotopic">Send money abroad. <span>Know exactly</span> what they get.</h2>
        <p>Institutional-grade cross-border settlement with locked rates before you pay. Arrives in minutes, tracked at every step.</p>
        <HeroFeatureCard />

        <div className="rating_row">
            <div className="stars_badge">
                Trustpilot <span><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /><img src={Star} alt="Star" /></span>
            </div>
            <div className="rating">4.9 / 5</div>
            <span className="sep_span"></span>
            <p>12,400+ verified customer reviews</p>
        </div>

    </div>

  )
}

export default HeroRight