import { useState } from "react";
import Validation from "../Validation.js";
import "./Form.modules.css";

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
    <div className="container-form">
      <img className="image-login" src="/login.png" alt="Rick_and_Morty" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          className={errors.email && "warning"}
          onChange={handleChange}
        />
        <br />
        {errors.email && <p className="danger">{errors.email}</p>}

        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          className={errors.password && "warning"}
          onChange={handleChange}
        />
        <br />
        {errors.password && <p className="danger">{errors.password}</p>}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
