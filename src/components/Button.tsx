import "../styles/button.scss";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => (
  <button className="button" {...props} />
);

export default Button;
