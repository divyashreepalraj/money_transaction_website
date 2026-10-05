import Star from "../../assets/star.svg";
import HeroFeatureCard from "./HeroFeatureCard";
import Badges from "../Badges";

const HeroRight = () => {
  return (
    <div className="right_side">
      <Badges
        className="hero_badge"
        dot
        children="Guaranteed mid-market rates • 0% hidden fees"
      />

      <h2 className="herotopic">
        Send money abroad. <span>Know exactly</span> what they get.
      </h2>
      <p>
        Institutional-grade cross-border settlement with locked rates before you
        pay. Arrives in minutes, tracked at every step.
      </p>

      <HeroFeatureCard />

      <div className="rating_row">
        <Badges className="stars_badge">
          Trustpilot{" "}
          <span>
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
          </span>{" "}
        </Badges>

        <div className="rating">4.9 / 5</div>
        <span className="sep_span"></span>
        <p>12,400+ verified customer reviews</p>
      </div>
    </div>
  );
};

export default HeroRight;
