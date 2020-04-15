import React, { FC } from 'react';

const SignUp: FC = () => {

  return (
      <h1>Sign up</h1>
  )
}

export default SignUp;

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
