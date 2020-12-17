// Routing
const express = require('express');
const multer = require('multer');
const {cleanBody} = require('../middleware');
const businessInformation = require('../controllers/businessInformation');
const router = express.Router();
const upload = multer();

router.route('/')
  .get(businessInformation.renderHome)
  .post(upload.none(),cleanBody,businessInformation.sendContact)

router.get('/news', businessInformation.renderNews)

router.get('/services', businessInformation.renderServices)

router.get('/aboutUs', businessInformation.renderAboutUs)

router.get('/contactUs', businessInformation.renderContactUsForm)

module.exports = router
