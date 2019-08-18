const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Manifacturer  = require('../models/Manifacturer');

router.get('/', (req, res) =>
    Manifacturer.findAll()
        .then(manifacturers => {
            console.log(manifacturers);
            res.sendStatus(200);

        })
        .catch(err => console.log(err)));


module.exports = router;

