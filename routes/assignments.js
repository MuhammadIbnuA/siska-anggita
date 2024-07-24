const express = require('express');
const assignmentsController = require('../controllers/assignmentsController');
const router = express.Router();

router.post('/', assignmentsController.createAssignment);
router.get('/', assignmentsController.getAssignments);

module.exports = router;
