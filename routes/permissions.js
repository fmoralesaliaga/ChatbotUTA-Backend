const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionsController');

// Ruta para obtener todos los perfiles
router.get('/', permissionController.getPermissions);

// Ruta para obtener un perfil por su ID
router.get('/:id', permissionController.getPermissionById);

module.exports = router;
