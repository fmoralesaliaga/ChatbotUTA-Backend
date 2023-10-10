const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear una nueva pregunta
async function createQuestion(req, res) {
  try {
    const newQuestion = await prisma.question.create({
      data: {
        text: req.body.text,
        type: req.body.type,
        departmentId: parseInt(req.body.departmentId),
        parentQuestionId: parseInt(req.body.parentQuestionId),
        answerId: parseInt(req.body.answerId),
      },
    });
    return res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error al crear pregunta:', error);
    return res.status(500).json({ error: 'Error al crear pregunta' });
  }
}

// Obtener todas las preguntas
async function getQuestions(req, res) {
  try {
    const questions = await prisma.question.findMany();
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No se encontraron preguntas.' });
    }
    return res.status(200).json(questions);
  } catch (error) {
    console.error('Error al obtener preguntas:', error);
    return res.status(500).json({ error: 'Error al obtener preguntas' });
  }
}

// Obtener pregunta por ID
async function getQuestionById(req, res) {
  const { id } = req.params;
  try {
    const question = await prisma.question.findUnique({
      where: { id: parseInt(id) },
    });
    if (!question) {
      return res.status(404).json({ message: 'Pregunta no encontrada.' });
    }
    return res.status(200).json(question);
  } catch (error) {
    console.error('Error al obtener pregunta:', error);
    return res.status(500).json({ error: 'Error al obtener pregunta' });
  }
}

// Actualizar una pregunta
async function updateQuestion(req, res) {
  const { id } = req.params;
  try {
    let updatedQuestion;
    if (req.body.answerId !== null && req.body.answerId !== undefined) {
      // Se proporcionó un valor para answerId, intenta asignar una respuesta.
      const answer = await prisma.answer.findUnique({
        where: { id: req.body.answerId },
      });

      if (!answer) {
        return res.status(404).json({ error: 'La respuesta no existe.' });
      }

      // Si la respuesta existe, actualiza el campo answerId de la pregunta.
      updatedQuestion = await prisma.question.update({
        where: { id: parseInt(id) },
        data: {
          answerId: req.body.answerId,
          // Otros campos de pregunta que puedas querer actualizar.
        },
      });
    } else {
      // No se proporcionó un valor para answerId, actualiza otros campos de pregunta.
      updatedQuestion = await prisma.question.update({
        where: { id: parseInt(id) },
        data: {
          text: req.body.text,
          type: req.body.type,
          departmentId: req.body.departmentId,
          parentQuestionId: req.body.parentQuestionId,
          // Otros campos de pregunta que puedas querer actualizar.
        },
      });
    }

    return res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error('Error al actualizar pregunta:', error);
    return res.status(500).json({ error: 'Error al actualizar pregunta' });
  }
}

// Eliminar una pregunta
async function deleteQuestion(req, res) {
  const { id } = req.params;
  try {
    await prisma.question.delete({
      where: { id: parseInt(id) },
    });
    return res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar pregunta:', error);
    return res.status(500).json({ error: 'Error al eliminar pregunta' });
  }
}

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
