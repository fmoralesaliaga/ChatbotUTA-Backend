# API REST

API REST NODE POSTGRESQL

| Tipo   | Ruta                        | Función Controladora | Objeto JSON de respuesta                                       |
|--------|-----------------------------|----------------------|--------------------------------------------------------------|
| GET    | /getusers                   | getUsers             | Lista de usuarios en formato JSON                            |
| GET    | /getuserid/:id              | getUserById          | Datos del usuario con el ID especificado en formato JSON    |
| POST   | /adduser                    | setUser              | Respuesta "Usuario agregado" en formato JSON                 |
| PUT    | /updateuser/:id             | updateUser           | Respuesta "Usuario actualizado" en formato JSON              |
| DELETE | /deleteuserid/:id           | deleteUserById      | Respuesta "Usuario eliminado" en formato JSON                |


## Lanzar proyecto

A continuación, algunos comandos útiles para utilizar este proyecto:

### Instalar dependencias
```bash
npm install  
```

### Lanzar con Node
```bash
npm start  
```

### Lanzar con Nodemon
```bash
npm run dev  
```

## Dependencias requeridas
```bash
npm install express pg  
```

## Dependencias de desarrollo
```bash
npm install nodemon --save-dev  
```
