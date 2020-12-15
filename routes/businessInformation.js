// Routing
const express = require('express');
const businessInformation = require('../controllers/businessInformation')
const router = express.Router();

router.get('/', businessInformation.home)

router.get('/news', businessInformation.news)

router.get('/pricing', businessInformation.pricing)

router.get('/aboutUs', businessInformation.aboutUs)

module.exports = router
