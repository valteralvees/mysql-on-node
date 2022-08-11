const express = require('express');

const app = express();

const db = require('./models/db.js')

app.get("/", async(request, response)=>{
  response.send("Página inicial");
});

app.listen(8080, () =>{
  console.log("🚀Servidor iniciado na porta 8080");
});