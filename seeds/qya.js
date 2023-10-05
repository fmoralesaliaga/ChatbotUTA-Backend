const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedQuestionsAndAnswers() {
  try {
      // Elimina todas las respuestas relacionadas con las preguntas
      await prisma.answer.deleteMany({
        where: {
          question: {
            departmentId: 1, // Ajusta el departamento según tu necesidad
            departmentId: 2,
          },
        },
      });
  
      // Elimina todas las subpreguntas
      await prisma.question.deleteMany({
        where: {
          parentQuestion: {
            departmentId: 1, // Ajusta el departamento según tu necesidad
            departmentId: 2,
          },
        },
      });
  
      // Elimina las preguntas principales
      await prisma.question.deleteMany({
        where: {
          departmentId: 1, // Ajusta el departamento según tu necesidad
          departmentId: 2,
        },
      });

    // Crea una pregunta principal
    const pregunta1 = await prisma.question.create({
      data: {
        id: 1,
        text: '¿Cuál es la duración de las carreras? ',
        type: 'publica',
        department: {
          connect: { id: 2 },
        },
      },
    });

    // Crea una subpregunta relacionada a la pregunta principal
    const pregunta2 = await prisma.question.create({
      data: {
        id: 2,
        text: '¿Cual es la duración de la carrera de Ingeniería Civil en Computación e Informática?',
        type: 'publica', 
        department: {
          connect: { id: 2 },
        },
        parentQuestion: {
          connect: { id: pregunta1.id }, // Establece la relación con la pregunta principal
        },
      },
    });

    // Crea respuestas relacionadas a las preguntas
    const respuesta1 = await prisma.answer.create({
      data: {
        id: 1,
        text: "",
        question: {
          connect: { id: pregunta1.id },
        },
      },
    });

    const respuesta2 = await prisma.answer.create({
      data: {
        id: 2,
        text: 'La carrera de Ingeniería en Computación e Informática dura 11 semestres',
        question: {
          connect: { id: pregunta2.id },
        },
      },
    });

    console.log('Preguntas y respuestas creadas con éxito.');
  } catch (error) {
    console.error('Error al crear preguntas y respuestas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedQuestionsAndAnswers();
