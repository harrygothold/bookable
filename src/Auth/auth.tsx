import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SignInContainer: FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { username, password } = formData;
    e.preventDefault();
    Auth.signUp({
      username,
      password,
    }).then(() => {
      history.push(`/confirmation?email=${username}`);
    })
  }  

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="username" onChange={(e) => handleChange(e)} value={formData.username} type="email" />
      <input name="password" onChange={(e) => handleChange(e)} value={formData.password} type="password" />
      <button type="submit">Submit</button>
    </form>
  )  
}

export default SignInContainer;
