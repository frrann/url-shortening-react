/* eslint-disable react/prop-types */
const Button = ({
  children,
  rounded = true,
  disabled = false,
  fontSize = "16px",
  onClick,
}) => {
  return (
    <button
      className={`btn ${rounded ? "btn--rounded" : null}`}
      disabled={disabled}
      onClick={onClick}
      style={{ fontSize: fontSize }}
    >
      {children}
    </button>
  );
};

export default Button;
