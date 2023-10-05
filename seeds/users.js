const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



async function main() {
    // Borrar todos los perfiles y permisos existentes
    await prisma.user.deleteMany({});
    await prisma.profile.deleteMany({});
    await prisma.permission.deleteMany({});
    await prisma.department.deleteMany({});

  // Crear perfiles
    const perfilUsuario = await prisma.profile.create({
        data: { name: 'Usuario',
                id: 1 },
    });

    const perfilAdmin = await prisma.profile.create({
        data: { name: 'Administrador',
                id: 2  },
    });

  // Crear permisos
    const crearPermiso = await prisma.permission.create({
        data: { name: 'Crear',
                id: 1  },
    });

    const leerPermiso = await prisma.permission.create({
        data: { name: 'Leer',
                id: 2  },
    });

    const actualizarPermiso = await prisma.permission.create({
        data: { name: 'Actualizar',
                id: 3 },
    });

    const eliminarPermiso = await prisma.permission.create({
        data: { name: 'Eliminar',
                id: 4},
    });

  // Crear Departamentos
    const Departamento1 = await prisma.department.create({
        data: { name: 'Registraduria',
                id: 1  },
    });

    const Departamento2 = await prisma.department.create({
        data: { name: 'ICCI',
                id: 2  },
    });

  // Crear usuarios de ejemplo y asignar perfiles y permisos
    const usuario1 = await prisma.user.create({
        data: {
        id: 1,
        name: 'Diego Baltazar',
        email:'diegho@gmail.com',
        password:'diego123',
        profiles: {
            connect: [{ id: perfilAdmin.id }],
        },
        departments: {
            connect: [{ id: Departamento1.id },
                    { id: Departamento2.id },],
        },
        },
    });

    const usuario2 = await prisma.user.create({
        data: {
        id: 2,
        name: 'Nicolas Lampe',
        email:'nicolas@gmail.com',
        password:'nico123',
        profiles: {
            connect: [{ id: perfilUsuario.id }],
        },
        departments: {
            connect: [{ id: Departamento1.id }],
        },
        },
    });

  // Asignar permisos a usuarios
    await prisma.user.update({
        where: { id: usuario1.id },
        data: {
        profiles: {
            update: [
            {
                where: { id: perfilAdmin.id },
                data: {
                permissions: {
                    connect: [crearPermiso, leerPermiso, actualizarPermiso, eliminarPermiso],
                },
                },
            },
            ],
        },
        },
    });
  
  await prisma.user.update({
    where: { id: usuario2.id },
    data: {
      profiles: {
        update: [
          {
            where: { id: perfilUsuario.id },
            data: {
              permissions: {
                connect: [leerPermiso],
              },
            },
          },
        ],
      },
    },
  });

  console.log('Perfiles, permisos y usuarios de ejemplo creados con éxito.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
