const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear un nuevo usuario
async function createUser(req, res) {
  try {
    
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profiles:{
          connect: req.body.selectedProfileIds.map((profileId) => ({id: profileId}))
        },
        departments:{
          connect: req.body.selectedDepartmentIds.map((departmentId) => ({id: departmentId}))
        },

      },
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return res.status(500).json({ error: 'Error al crear usuario' });
  }
}

// Actualizar datos de un usuario
async function updateUser(req, res) {
    const { id } = req.params;
    try {
      const user = await prisma.user.update({
        where: { id: parseInt(id) }, 
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      return res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  }

  // Eliminar un usuario
  async function deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      return res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
  
  // Obtener datos de un usuario
  async function getUsers(req, res) {
    try {
      const users = await prisma.user.findMany();
      
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'No se encontraron usuarios.' });
      }
  
      return res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }

  // Obtener datos de usuario por ID
async function getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error al obtener pregunta:', error);
      return res.status(500).json({ error: 'Error al obtener pregunta' });
    }
  }

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};
