import React, { FC } from 'react';
import './auth.css'

const LandingPage: FC = () => {
  return (
      <div className='hero'>
        <div className='central'>
          <div className='top'>
            <h1>Bookable</h1>
          </div>

          <div className='bottom'>
            <div className='split'>
              LOG IN
            </div>
            <div className='split'>
              SIGN UP
            </div>
          </div>
        </div>
      </div>

  )
}

export default LandingPage;

// const SignInContainer: FC = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//
//   const history = useHistory();
//
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     const { username, password } = formData;
//     e.preventDefault();
//     Auth.signUp({
//       username,
//       password,
//     }).then(() => {
//       history.push(`/confirmation?email=${username}`);
//     });
//   };
//
//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <h1>Sign Up</h1>
//       <input
//         name="username"
//         onChange={(e) => handleChange(e)}
//         value={formData.username}
//         type="email"
//         placeholder="Email"
//       />
//       <input
//         name="password"
//         onChange={(e) => handleChange(e)}
//         value={formData.password}
//         type="password"
//         placeholder="Password"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
//
// export default SignInContainer;
