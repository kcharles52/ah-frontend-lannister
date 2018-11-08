import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control input-lg"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props}
        pattern={props.pattern}
      />
      <div className="invalid-feedback error" id={`${props.name}Error`} />

    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  pattern:PropTypes.string,
  value:PropTypes.string,
  type:PropTypes.string
};
export default Input;
