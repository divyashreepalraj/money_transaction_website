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
          {icon}
        </span>
      )}
    </button>
  );
};

export default CompButton;