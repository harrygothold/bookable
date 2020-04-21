import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ForgotPasswordPage: FC = () => {
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setUsername(value);
  }

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      setLoading(true);
      e.preventDefault();
      try {
          const response = await Auth.forgotPassword(username);
          if (response) {
              history.push(`/reset?email=${username}`);
          }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <h1>Enter Your Email Address</h1>
    {error && <Error error={error} errorTitle='Oops' />}
    <Loading loading={loading} />
    <input
      name="email"
      onChange={(e) => handleChange(e)}
      value={username}
      type="text"
      placeholder="Email Address"
    />
    <button type="submit">Submit</button>
  </form>
  )
}

export default ForgotPasswordPage;