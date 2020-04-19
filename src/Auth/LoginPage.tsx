import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Loading from "../components/Loading";
import Classes from "./FormHolder.module.scss";

interface LoginData {
  username: string;
  password: string;
}

const LoginPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible ] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<LoginData>({
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { username, password } = formData;
    setLoading(true);
    setError("");
    e.preventDefault();
    try {
      const response = await Auth.signIn({
        username,
        password,
      });
      if (response) {
        setLoading(false);
        localStorage.setItem(
          "token",
          response.signInUserSession.accessToken.jwtToken
        );
        history.push("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const location = useLocation();
  const isRedirect = !!location.search.split("=")[1];

  return (
  <div className={Classes.container}>
    <div className={Classes['sign-in-header']}>
    <div className={Classes['sign-up-link']}>
        <h2>
          <a href="/signup">
            NEW TO BOOKABLE?
          </a>
        </h2>
      </div>
      <div className={Classes['currently-selected']}>
        <h2>ALREADY REGISTERED?</h2>
      </div>
  </div>
    <h1>SIGN IN WITH EMAIL</h1>
    <div className={Classes['form-holder']}>
      <form onSubmit={(e) => handleSubmit(e)}>
        {isRedirect && <Alert severity='warning'>
          <AlertTitle>Warning!</AlertTitle>
          You must be logged in to view this page
          </Alert>
          }
          <Loading loading={loading} />
        {error && <Error error={error} errorTitle='Authentication Error' />}
        <label>Email Address:</label>
        <div className={Classes.field}>
          <input
            className={Classes.username}
            name="username"
            onChange={(e) => handleChange(e)}
            value={formData.username}
            type="email"
            placeholder="Email"
          />
        </div>
        <label>Password:</label>
        <div className={Classes.field}>
          <input
            name="password"
            onChange={(e) => handleChange(e)}
            value={formData.password}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
          />
          <button className={Classes['toggle-password']}type="button" onClick={togglePasswordVisibility}>{isPasswordVisible ? 'HIDE' : 'SHOW'}</button>
        </div>
        <div className={Classes['button-holder']}>
          <button className={Classes['submit-button']} type="submit">SIGN IN</button>
          <Link className={Classes['forgot-password']}to="/forgotpassword">Forgot Password?</Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
