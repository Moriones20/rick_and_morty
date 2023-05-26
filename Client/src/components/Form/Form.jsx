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
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Sign in</h1>
          <div className="inputContainer">
            <input
              type="text"
              name="email"
              required="required"
              value={userData.email}
              onChange={handleChange}
            />
            <span>Email</span>
            <i></i>
          </div>
          <p className="text-help">Usa Felipe@gmail.com</p>
          {errors.email && <p className="danger">{errors.email}</p>}

          <div className="inputContainer">
            <input
              type="password"
              name="password"
              required="required"
              value={userData.password}
              onChange={handleChange}
            />
            <span>Password</span>
            <i></i>
          </div>
          <p className="text-help">Usa asd123</p>
          {errors.password && <p className="danger">{errors.password}</p>}

          <div className="links">
            <a href="/">Forgot Password</a>
            <a href="/">Sing up</a>
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Form;
