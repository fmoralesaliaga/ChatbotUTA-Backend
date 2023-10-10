const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profilesController');

// Ruta para obtener todos los perfiles
router.get('/', profileController.getProfiles);

// Ruta para obtener un perfil por su ID
router.get('/:id', profileController.getProfileById);

module.exports = router;
