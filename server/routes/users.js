const express = require('express');
const router = express.Router();

// import query helper functions and use them in routes

// user details page
router.get('/:id', (req, res) => {

});

// create user page
router.get('/create', (req, res) => {

});

// login page - I don't think we need this route because react router renders the page
//and we don't need to query any data to display on the page
router.get('/login', (req, res) => {

});

// registration page
router.get('/register', (req, res) => {

});

module.exports = router;