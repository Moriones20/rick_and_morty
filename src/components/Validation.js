const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /\d/;

const Validation = (userData) => {
  let errors = {};

  if (!userData.email || !regexEmail.test(userData.email)) {
    errors.email = "Ingresa un email valido.";
  }
  if (userData.email.length >= 35) {
    errors.email = "No puede tener más de 35 caracteres.";
  }
  if (!regexNumber.test(userData.password)) {
    errors.password = "La contraseña tiene que tener al menos un número.";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
  }

  return errors;
};

export default Validation;
