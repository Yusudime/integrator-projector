const administradorController = require('../controllers/adminitradorController');

const express = require('express');
const router = express.Router();

router.post('/user', administradorController.createUser);
router.get('/users', administradorController.findAllUsers);
router.get('/user/:id', administradorController.findUser);
router.put('/user/:id', administradorController.updateUser);
router.delete('/user/:id', administradorController.deleteUser);

module.exports = router;