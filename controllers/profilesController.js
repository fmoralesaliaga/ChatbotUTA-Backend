const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

  // Obtener datos de un usuario
  async function getProfiles(req, res) {
    try {
      const profiles = await prisma.profile.findMany();
      
      if (!profiles || profiles.length === 0) {
        return res.status(404).json({ message: 'No se encontraron perfiles.' });
      }
  
      return res.status(200).json(profiles);
    } catch (error) {
      console.error('Error al obtener perfiles:', error);
      return res.status(500).json({ error: 'Error al obtener perfiles' });
    }
  }

  // Obtener datos de usuario por ID
async function getProfileById(req, res) {
    const { id } = req.params;
    try {
      const profile = await prisma.profile.findUnique({
        where: { id: parseInt(id) },
      });
      if (!profile) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
      return res.status(200).json(profile);
    } catch (error) {
      console.error('Error al obtener pregunta:', error);
      return res.status(500).json({ error: 'Error al obtener pregunta' });
    }
  }

module.exports = {
  getProfiles,
  getProfileById,
};
