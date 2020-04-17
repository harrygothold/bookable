import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Loading from "../components/Loading";

interface FormData {
  username: string;
  password: string;
}

const SignInContainer: FC = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
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
    setLoading(true);
    const { username, password } = formData;
    e.preventDefault();
    try {
      const response = await Auth.signUp({
        username,
        password,
      });
      if (response) {
        history.push(`/confirmation?email=${username}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      {error && <Error error={error} errorTitle='Authentication Error' />}
      <Loading loading={loading} />
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

export default SignInContainer;
