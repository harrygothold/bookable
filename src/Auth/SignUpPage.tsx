import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Classes from './FormHolder.module.scss';

interface FormData {
  username: string;
  password: string;
}

const SignInContainer: FC = () => {
  const [error, setError] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible ] = useState<boolean>(false);
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

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
  <div className={Classes.container}>
    <div className={Classes['sign-in-header']}>
    <div className={Classes['currently-selected']}>
      <h2>NEW TO BOOKABLE?</h2>
    </div>
    <div className={Classes['sign-up-link']}>
    <h2>
      <a href="/login">
        ALREADY REGISTERED?
      </a>
    </h2>
  </div>
</div>
  <h1>SIGN UP USING YOUR EMAIL ADDRESS</h1>
  <div className={Classes['form-holder']}>
    <form onSubmit={(e) => handleSubmit(e)}>
      {error && <Error error={error} errorTitle='Authentication Error' />}
      <Loading loading={loading} />
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
        <button className={Classes['submit-button']} type="submit">SIGN UP</button>
      </div>
      </form>
    </div>
  </div>
  );
};

export default SignInContainer;
