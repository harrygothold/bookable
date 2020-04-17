import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Loading from "../components/Loading";

interface LoginData {
  username: string;
  password: string;
}

const LoginPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign In</h1>
      {isRedirect && <Alert severity='warning'>
        <AlertTitle>Warning!</AlertTitle>
        You must be logged in to view this page
        </Alert>
        }
        <Loading loading={loading} />
      {error && <Error error={error} errorTitle='Authentication Error' />}
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
