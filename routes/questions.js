const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

// Ruta para crear Pregunta
router.post('/', questionsController.createQuestion);

// Ruta para obtener todas las preguntas
router.get('/', questionsController.getQuestions);

// Ruta para obtener pregunta por ID
router.get('/:id', questionsController.getQuestionById);

// Ruta para actualizar una pregunta
router.put('/:id', questionsController.updateQuestion);

// Ruta para eliminar una pregunta
router.delete('/:id', questionsController.deleteQuestion);

module.exports = router;
