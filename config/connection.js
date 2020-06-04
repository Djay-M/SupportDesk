const Sequelize = require('sequelize')

const sequelize = new Sequelize("support_tickets", 'root', 'root', {host : '127.0.0.1', dialect: 'postgres'})

module.exports = sequelize;
global.sequelize = sequelize;