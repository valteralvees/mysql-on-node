const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

//Criar a tabela - só é executado quando a tabela não existe
User.sync();

module.exports = User;