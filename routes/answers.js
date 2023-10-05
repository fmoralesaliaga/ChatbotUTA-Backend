const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

// Ruta para crear una respuesta
router.post('/', answersController.createAnswer);

// Ruta para obtener todas las respuestas
router.get('/', answersController.getAnswers);

// Ruta para obtener una respuesta por su ID
router.get('/:id', answersController.getAnswerById);

// Ruta para actualizar una respuesta
router.put('/:id', answersController.updateAnswer);

// Ruta para eliminar una respuesta
router.delete('/:id', answersController.deleteAnswer);

module.exports = router;
