import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { Auth } from 'aws-amplify';

const ConfirmationPage: FC = () => {
    const [confirmationCode, setConfirmationCode] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setConfirmationCode(value);
    }

    const location = useLocation();
    const history = useHistory();
    const username = location.search.split('=')[1];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Auth.confirmSignUp(
            username,
            confirmationCode,
        ).then(() => {
            console.log("sherbet!");
            history.push('/login');
        })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input name="confirmationCode" onChange={(e) => handleChange(e)} value={confirmationCode} type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ConfirmationPage;
