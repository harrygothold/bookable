import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

const LoginPage: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { username, password } = formData;
    e.preventDefault();
    Auth.signIn({
      username,
      password,
    }).then((user) => {
      // add type here
      localStorage.setItem(
        "token",
        user.signInUserSession.accessToken.jwtToken
      );
      history.push("/dashboard");
    });
  };

  const location = useLocation();
  const isRedirect = !!location.search.split("=")[1];

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      {isRedirect && <p>You must be logged in to view this page</p>}
      <input
        name="username"
        onChange={(e) => handleChange(e)}
        value={formData.username}
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={(e) => handleChange(e)}
        value={formData.password}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
