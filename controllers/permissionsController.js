const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

  // Obtener datos de un Permiso
  async function getPermissions(req, res) {
    try {
      const permissions = await prisma.permission.findMany();
      
      if (!permissions || permissions.length === 0) {
        return res.status(404).json({ message: 'No se encontraron permisos.' });
      }
  
      return res.status(200).json(permissions);
    } catch (error) {
      console.error('Error al obtener permisos:', error);
      return res.status(500).json({ error: 'Error al obtener permisos' });
    }
  }

  // Obtener datos de Permiso por ID
async function getPermissionById(req, res) {
    const { id } = req.params;
    try {
      const permission = await prisma.permission.findUnique({
        where: { id: parseInt(id) },
      });
      if (!permission) {
        return res.status(404).json({ message: 'Permiso no encontrado.' });
      }
      return res.status(200).json(permission);
    } catch (error) {
      console.error('Error al obtener pregunta:', error);
      return res.status(500).json({ error: 'Error al obtener pregunta' });
    }
  }

module.exports = {
  getPermissions,
  getPermissionById,
};
