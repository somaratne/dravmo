import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        displayName: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, repeatPassword } = this.state.data;
    if (password !== repeatPassword) {
      alert("Passwords not matching");
      return;
    } else {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      try {
        await createUserProfileDoc(user, { displayName });
        this.setState({
          data: {
            displayName: "",
            email: "",
            password: "",
            repeatPassword: ""
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { displayName, email, password, repeatPassword } = this.state.data;
    return (
      <div>
        <h2>Sign up Here</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Repeat Password"
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
