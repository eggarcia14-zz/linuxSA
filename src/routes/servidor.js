const router = require('express').Router();

const customerController = require('../controllers/servidorController');

router.get('/', customerController.list);
module.exports = router;

