const http = require("http");
const { getCharById } = require("./controllers/getCharById")

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      getCharById(res, +id)
    } else {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Ruta no encontrado");
    }
  })
  .listen(3001, "localhost");
