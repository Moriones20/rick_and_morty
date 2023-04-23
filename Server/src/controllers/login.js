const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query // Obtiene el correo electrónico y la contraseña de la solicitud de consulta
  const user = users.find(user => user.email === email && user.password === password) // Busca un usuario en el arreglo de usuarios que coincida con el correo electrónico y la contraseña

  if (user) {
    res.status(200).json({ access: true }) // Si se encuentra un usuario, devuelve un objeto JSON con la propiedad access en true
  } else {
    res.status(401).json({ access: false }) // Si no se encuentra un usuario, devuelve un objeto JSON con la propiedad access en false y un código de estado 401 (No autorizado)
  }
};

module.exports = login;
