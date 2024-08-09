import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from "express";

const server = express();
const puerto = process.env.PORT || 3000;
const rutaPrincipal = process.env.PRINCIPAL;

server.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto: ${puerto}`);
});

server.get("/recovery", (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {}
});
