import React from "react";

import "./Login.css";

const user = {
  username: "Admin",
  password: "123"
};

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    if (user.username === username && user.password === password) {
      localStorage.setItem("token", "1");
      this.props.history.push("/");
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="fname">User Name</label>
        <input
          value={username}
          type="text"
          id="fname"
          name="username"
          placeholder="Username"
          onChange={this.onChange}
        />
        <label htmlFor="lname">Password</label>
        <input
          value={password}
          type="text"
          id="lname"
          name="password"
          placeholder="Password"
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
