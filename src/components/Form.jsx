import { useState } from "react";
import Validation from "./Validation.js";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <br />
      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
