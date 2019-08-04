
import React from "react";
import pt from "prop-types";
import { Link } from "react-router-dom";
import cn from "lib/classname";
import cm from "./button.module.css";

const Button = ({ to, primary, create, disabled, hidden, ...props }) => {
  const className = cn(cm, "btn", { primary, disabled, create, hidden });

  return to ? (
    <Link {...{ to, className, ...props }} />
  ) : (
    <button {...{ className, ...props }} />
  );
};

Button.propTypes = {
  disabled: pt.bool,
  primary: pt.bool,
  create: pt.bool
};

Button.defaultProps = {
  primary: true,
  disabled: false,
  create: false
};

export default Button;
