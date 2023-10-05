const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Borrar todos los perfiles y permisos existentes
    await prisma.department.deleteMany({});

    // Crear Departamentos
  const Departamento1 = await prisma.department.create({
    data: { name: 'Registraduria',
            id: 1  },
  });

  const Departamento2 = await prisma.department.create({
    data: { name: 'ICCI',
            id: 2  },
  });

  console.log('Departamentos de ejemplo creados con éxito.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
