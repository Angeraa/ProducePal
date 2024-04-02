const express = require('express');
const PostalCodeItems = require('../models/postalcode_model');
const {searchItems} = require('../controllers/itemController');

const router = express.Router();

router.get('/search/:postalCode/:name', (req, res) => {
    searchItems(req, res);
  });
  
  module.exports = router;