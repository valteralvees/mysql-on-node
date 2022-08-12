const express = require('express');

const app = express();

const User = require('./models/User')

const db = require('./models/db.js')

app.use(express.json());

app.get("/", async(request, response)=>{
  response.send("Página inicial");
});


app.post("/cadastrar", async(request, response) => {
  console.log(request.body)

  await User.create(request.body)
  .then(()=>{
    return response.json({
      erro: false,
      mensagem: "Usuário cadastrado com sucesso"
    })
  }).catch(()=>{
    return response.status(400).json({
      erro: true,
      mensagem: "Erro: Usuário não cadastrado com sucesso."
    })
  })

  response.send("Página cadastrar.")
});

app.listen(8080, () =>{
  console.log("🚀Servidor iniciado na porta 8080");
});