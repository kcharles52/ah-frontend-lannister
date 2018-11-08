import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button
      className={
        props.btnClass === "primary" ? "btn btn-primary" : props.btnClass
      }
      onClick={props.action}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string,
  btnClass: PropTypes.string,
  type: PropTypes.string
};

export default Button;
