const { Sequelize } = require("sequelize");
const connection = require("../database/index");


const Users = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {//Deve ter no mínimo 8 caracteres.
        type: Sequelize.STRING
    }
})

module.exports = Users
