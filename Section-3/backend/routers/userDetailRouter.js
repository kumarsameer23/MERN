const express = require('express');
const router = express.Router();
const UserDetails = require('../models/UserDetail'); // make sure path is correct

router.post('/add', async (req, res) => {
    try {
        const result = await new UserDetails(req.body).save();
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/getall', async (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
     res.status(500).json(err);   
    });
});


module.exports = router;
