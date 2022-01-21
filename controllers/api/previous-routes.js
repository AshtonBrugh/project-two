const router = require('express').Router();
const { Previous } = require ('../../models');

//get all results
router.get('/', (req, res) => {
    Previous.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});