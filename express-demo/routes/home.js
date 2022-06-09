const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Manish Mahato' });
    // res.send("Hello Manish Mahato");
});

module.exports = router;