import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Loading from "../components/Loading";

interface LoginData {
    code: string;
    password: string;
  }

const ResetPassword: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginData>({
    code: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(name, value)
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log(formData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const username = location.search.split("=")[1];
    setLoading(true);
    e.preventDefault();
    try {
      const response = await Auth.forgotPasswordSubmit(username, formData.code, formData.password);
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Enter your new password and confirmation code</h1>
      {error && <Error error={error} errorTitle='Oops' />}
      <Loading loading={loading} />
      <input
        name="code"
        onChange={(e) => handleChange(e)}
        value={formData.code}
        type="number"
        placeholder="Confirmation Code"
      />
      <input
        name="password"
        onChange={(e) => handleChange(e)}
        value={formData.password}
        type="password"
        placeholder="New Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResetPassword;
