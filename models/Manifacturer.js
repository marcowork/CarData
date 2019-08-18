const Sequelize = require('sequelize');
const db = require('../config/db');

const Manifacturer = db.define('Manifacturer',{
    name: {
        type: Sequelize.STRING
    },
    address_id: {
        type: Sequelize.STRING
    },
    creation_date: {
        type: Sequelize.STRING
    },
    legal_form: {
        type: Sequelize.STRING
    },
    chamber_of_commerce: {
        type: Sequelize.STRING
    }
})

module.exports = Manifacturer;