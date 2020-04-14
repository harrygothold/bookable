import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { ISignUpResult } from 'amazon-cognito-identity-js';

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
        }).then((user) => { // add type here
            localStorage.setItem('token', user.signInUserSession.accessToken.jwtToken);
            history.push('/dashboard')
        });
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
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
