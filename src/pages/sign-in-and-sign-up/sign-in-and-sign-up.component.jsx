import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div>
      <h1 className="header-sign-in-and-sign-up">SIGN IN AND SIGN UP</h1>
      <SignIn />
    </div>
  );
};

export default SignInAndSignUp;
