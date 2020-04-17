import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Loading from "../components/Loading";

const ConfirmationPage: FC = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmationCode(value);
  };

  const location = useLocation();
  const history = useHistory();
  const username = location.search.split("=")[1];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await Auth.confirmSignUp(username, confirmationCode);
      if (response) {
        history.push("/login");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Confirm Your Email Address</h1>
      {error && <Error error={error} errorTitle='Oops' />}
      <Loading loading={loading} />
      <input
        name="confirmationCode"
        onChange={(e) => handleChange(e)}
        value={confirmationCode}
        type="text"
        placeholder="Confirmation Code"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfirmationPage;
