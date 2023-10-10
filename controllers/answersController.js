const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear una nueva respuesta
async function createAnswer(req, res) {
  try {
    const newAnswer = await prisma.answer.create({
      data: {
        text: req.body.text,
        questionId: parseInt(req.body.questionId)
      },
    });

    // Obtén el answerId de la respuesta recién creada
    const answerId = newAnswer.id;

        // Actualiza la pregunta para asignarle el answerId
        const questionId = parseInt(req.body.questionId);
        await prisma.question.update({
          where: { id: questionId },
          data: {
            answerId: answerId
          },
        });

    return res.status(201).json(newAnswer);
  } catch (error) {
    console.error('Error al crear respuesta:', error);
    return res.status(500).json({ error: 'Error al crear respuesta' });
  }
}

// Obtener todas las respuestas
async function getAnswers(req, res) {
    try {
      const answers = await prisma.answer.findMany();
      
      if (!answers || answers.length === 0) {
        return res.status(404).json({ message: 'No se encontraron respuestas.' });
      }
  
      return res.status(200).json(answers);
    } catch (error) {
      console.error('Error al obtener respuestas:', error);
      return res.status(500).json({ error: 'Error al obtener respuestas' });
    }
  }

  // Obtener todas respuesta por ID
async function getAnswerById(req, res) {
  const { id } = req.params;
  try {
    const answer = await prisma.answer.findUnique({
      where: { id: parseInt(id) },
    });

    if (!answer) {
      return res.status(404).json({ message: 'Respuesta no encontrada.' });
    }

    return res.status(200).json(answer);
  } catch (error) {
    console.error('Error al obtener respuesta por ID:', error);
    return res.status(500).json({ error: 'Error al obtener respuesta por ID' });
  }
}

// Actualizar una respuesta
async function updateAnswer(req, res) {
    const { id } = req.params;
    try {
      const updatedAnswer = await prisma.answer.update({
        where: { id: parseInt(id) },
        data: {
          text: req.body.text,
          questionId: req.body.questionId,
        },
      });
  
      return res.status(200).json(updatedAnswer);
    } catch (error) {
      console.error('Error al actualizar respuesta:', error);
      return res.status(500).json({ error: 'Error al actualizar respuesta' });
    }
  }

// Eliminar una respuesta
async function deleteAnswer(req, res) {
  const { id } = req.params;
  try {
    await prisma.answer.delete({
      where: { id: parseInt(id) },
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Error al eliminar respuesta:', error);
    return res.status(500).json({ error: 'Error al eliminar respuesta' });
  }
}

module.exports = {
  createAnswer,
  getAnswers,
  getAnswerById,
  updateAnswer,
  deleteAnswer,
};
