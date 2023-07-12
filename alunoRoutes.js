const alunoController = require('../controllers/alunoController');

const express = require('express');
const router = express.Router();

router.post('/user', alunoController.createUser);
router.get('/users', alunoController.findAllUsers);
router.get('/user/:id', alunoController.findUser);
router.put('/user/:id', alunoController.updateUser);
router.delete('/user/:id', alunoController.deleteUser);

module.exports = router;