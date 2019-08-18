const Sequelize = require('sequelize');
module.exports =  new Sequelize('Cars', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    opratorsAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },


});