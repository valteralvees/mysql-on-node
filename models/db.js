const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke","root", "123456",{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
  console.log("🟢Conexão com o banco de dados realizada com sucesso")
}).catch(function(){
  console.log('🔓Conexão com o banco de dados não foi realizada com sucesso')
})


module.exports = sequelize;