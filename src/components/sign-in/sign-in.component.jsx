import React from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signInWithGoogle } from "./../../firebase/firebase.utils";
import SignUp from "../sign-up/sign-up.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ data: { email: "", password: "" } });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { email, password } = this.state.data;
    return (
      <div className="row">
        <div className="col-1-2">
          <div className="sign-in">
            <h2>If you already have an Account</h2>
            <span>Enter email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <CustomButton type="submit">SIGN IN</CustomButton>
              <CustomButton onClick={signInWithGoogle}>
                SIGN IN WITH GOOGLE
              </CustomButton>
            </form>
          </div>
        </div>
        <div className="col-1-2">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default SignIn;
