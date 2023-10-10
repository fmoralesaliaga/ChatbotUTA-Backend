const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear un nuevo departamento
async function createDepartment(req, res) {
  try {
    const newDepartment = await prisma.department.create({
      data: {
        name: req.body.name,
      },
    });
    return res.status(201).json(newDepartment);
  } catch (error) {
    console.error('Error al crear el departamento:', error);
    return res.status(500).json({ error: 'Error al crear el departamento' });
  }
}

// Obtener todos los departamentos
async function getDepartments(req, res) {
  try {
    const departments = await prisma.department.findMany();
    return res.status(200).json(departments);
  } catch (error) {
    console.error('Error al obtener los departamentos:', error);
    return res.status(500).json({ error: 'Error al obtener los departamentos' });
  }
}

// Obtener departamento por ID
async function getDepartmentById(req, res) {
    const { id } = req.params;
  
    try {
      const department = await prisma.department.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!department) {
        return res.status(404).json({ message: 'Departamento no encontrado' });
      }
  
      return res.status(200).json(department);
    } catch (error) {
      console.error('Error al obtener el departamento por ID:', error);
      return res.status(500).json({ error: 'Error al obtener el departamento' });
    }
  }

// Actualizar Departamento
async function updateDepartment(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedDepartment = await prisma.department.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    return res.status(200).json(updatedDepartment);
  } catch (error) {
    console.error('Error al actualizar el departamento:', error);
    return res.status(500).json({ error: 'Error al actualizar el departamento' });
  }
}

// Eliminar Departamento
async function deleteDepartment(req, res) {
    const { id } = req.params;
  
    try {
      await prisma.department.delete({
        where: { id: parseInt(id) }, 
      });
  
      return res.status(204).send();
    } catch (error) {
      console.error('Error al eliminar el departamento:', error);
      return res.status(500).json({ error: 'Error al eliminar el departamento' });
    }
  }

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
