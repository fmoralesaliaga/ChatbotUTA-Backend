const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentsController');

// Ruta para crear Departamento
router.post('/', departmentController.createDepartment);

// Ruta para obtener datos de Departamentos
router.get('/', departmentController.getDepartments);

// Ruta para obtener datos de un Departamento por ID
router.get('/:id', departmentController.getDepartmentById);

// Ruta para actualizar datos de Departamento
router.put('/:id', departmentController.updateDepartment);

// Ruta para eliminar un Departamento
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
