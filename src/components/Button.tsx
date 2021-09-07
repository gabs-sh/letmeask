import "../styles/button.scss";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...rest }) => (
  <button className={`button ${isOutlined ? "outlined" : ""}`} {...rest} />
);

export default Button;
