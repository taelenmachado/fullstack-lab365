const { Sequelize } = require("sequelize");
const connection = require("../database/index");


const Places = connection.define('places', {
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
    contact: {
        type: Sequelize.STRING,
    },
    opening_hours: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    latitude: {
        type: Sequelize.DECIMAL,
    },
    longitude: {
        type: Sequelize.DECIMAL,
    }
})

module.exports = Places
