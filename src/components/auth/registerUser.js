import React, { Component } from "react";
import Input from "../common/input";
import Button from "../common/button";
import "./../../assets/authAssets/form.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUpAction } from "../../actions/authActions/signUpAction";
import SocialAuth from "./socialAuth";
import { Link } from "react-router-dom";

export class RegisterUser extends Component {
  static propTypes = {
    user: PropTypes.object,
    signUpAction: PropTypes.func
  };

  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    errors: {}
  };

  handleInputChange = event => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    event.target.classList.add("active");
    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      };
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let userData = { user: this.state.newUser };
    const { signUpAction } = this.props;
    signUpAction(userData);
  };

  render() {
    return (
      <div className="signup-form">
        <form className="form" onSubmit={this.handleFormSubmit}>
          <h2>Create an Account</h2>
          {/* Social login*/}
          <p className="hint-text">
            Sign up with your social media account or email address
          </p>
          <div className="social-btn text-center">
            <SocialAuth />
          </div>
          <div className="or-seperator">
            <b>or</b>
          </div>
          {/* register form*/}
          <Input
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            required={"required"}
            handleChange={this.handleInputChange}
          />
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email Addres"}
            required={"required"}
            handleChange={this.handleInputChange}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"password"}
            required={"required"}
            handleChange={this.handleInputChange}
          />
          <Input
            type={"password"}
            name={"passwordConfirm"}
            placeholder={"Confirm Password"}
            required={"required"}
            handleChange={this.handleInputChange}
          />

          <div className="form-group">
            <Button
              type={"submit"}
              btnClass={"btn btn-success btn-lg btn-block signup-btn"}
              action={this.handleFormSubmit}
              title={"Sign Up"}
            />
          </div>
          <div className="form-group">
            <div id="login" className="text-center">
              <Link to="/login">Already have account ? Login Here </Link>
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.registerReducer.user
});
export default connect(
  mapStateToProps,
  { signUpAction }
)(RegisterUser);
