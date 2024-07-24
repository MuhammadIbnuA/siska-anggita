const express = require('express');
const materialsController = require('../controllers/materialsController');
const router = express.Router();

router.post('/', materialsController.createMaterial);
router.get('/', materialsController.getMaterials);

module.exports = router;
