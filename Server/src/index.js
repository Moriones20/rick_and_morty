const server = require("./app");
const { PORT } = process.env;
const { conn } = require("./DB_connection");

server.listen(PORT, async () => {
  console.log("Server raised in port: " + PORT);
  await conn.sync({ force: false });
});
