import { useState } from "react";
import Validation from "../Validation.js";
import "./Form.modules.css";
import image from "../../assets/login.png"

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
      <form className="form" onSubmit={handleSubmit}>
        <div className="top-form">
          <h1 className="title">Sign in</h1>
          <img src={image} alt="rick_and_morty" />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="email"
            value={userData.email}
            className={errors.email ? "warning" : "input"}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
        {errors.email && <p className="danger">{errors.email}</p>}
        <br />
        <br />

        <div className="inputContainer">
          <input
            type="password"
            name="password"
            value={userData.password}
            className={errors.password ? "warning" : "input"}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </div>
        {errors.password && <p className="danger">{errors.password}</p>}

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
