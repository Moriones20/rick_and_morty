const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.startsWith("/rickandmorty/character/")) {
      const id = req.url.split("/").pop();
      const character = data.find((char) => char.id === Number(id));
      if (character) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("Personaje no encontrado");
      }
    } else {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Ruta no encontrado");
    }
  })
  .listen(3001, "localhost");
