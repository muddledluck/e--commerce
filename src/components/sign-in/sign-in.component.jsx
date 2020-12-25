import React, { Component } from "react";
import FromInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.components";
import { signInWithGoogle } from "../../firebase/firebase.utils";

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
            label="Email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          <FromInput
            name="password"
            label="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <CustomButtom type="submit">Sign In</CustomButtom>
            <CustomButtom
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
