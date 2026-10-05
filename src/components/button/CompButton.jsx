import "./button.css";

const CompButton = ({
  text = "",
  className = "",
  icon = ""
}) => {
  return (
    <button className={`button ${className}`}>
      {text}
      {icon && (
        <span className="btn_img">
          <img src={icon} alt="" />
        </span>
      )}
    </button>
  );
};

export default CompButton;