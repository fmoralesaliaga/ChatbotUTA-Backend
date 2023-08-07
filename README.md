# ChatbotUTA-Backend

## API REST NODE POSTGRESQL

### Tabla de rutas

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
npm install

### Lanzar con Node
npm start

### Lanzar con Nodemon
npm run dev

## Dependencias requeridas
npm install express pg

## Dependencias de desarrollo
npm install nodemon --save-dev
