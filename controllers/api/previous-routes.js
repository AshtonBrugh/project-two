const router = require('express').Router();
const { Previous } = require ('../../models');

//get all previous results
router.get('/', (req, res) => {
    Previous.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//find one previous result
router.get('/:id', (req, res) => {
    Previous.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No result found with this id!' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Add new previous result option
router.post('/', (req, res) => {
    Previous.create({
        name: req.body.name,
        quote: req.body.quote,
        origin: req.body.origin,
        personalities: req.body.personalities
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete a previousresult
router.delete('/:id', (req, res) => {
    Previous.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No result found with this id! '});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;