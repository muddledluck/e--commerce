import React, { Component } from "react";
import FromInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.components";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign-in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FromInput
            name="email"
            lable="Email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          <FromInput
            name="password"
            lable="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButtom type="submit">Sign In</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignIn;
