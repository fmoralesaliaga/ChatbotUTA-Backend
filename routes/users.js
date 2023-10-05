const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para crear Usuario
router.post('/', userController.createUser);

// Ruta para actualizar un usuario por su ID
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', userController.deleteUser);

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Ruta para obtener un usuario por su ID
router.get('/:id', userController.getUserById);

module.exports = router;
