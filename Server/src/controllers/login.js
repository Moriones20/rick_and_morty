const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password)
      return res.status(404).json({ message: "Faltan datos" });

    const user = await User.findOne({ where: { email: email } });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const isMatch = await User.findOne({ where: { password: password } });
    if (!isMatch) {
      res.status(403).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = login;
