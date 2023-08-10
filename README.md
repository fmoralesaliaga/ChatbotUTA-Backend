# API REST EXPRESS POSTGRES PRISMA

api rest utilizando node con express, prisma y de base de datos local con postgreSQL

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

### express & dotenv
```bash
npm install express dotenv  
```

## Dependencias de desarrollo

### nodemon
```bash
npm install nodemon --save-dev  
```

### prisma
```bash
npm install @prisma/client --save-dev  
```

## ¡ATENCION!
Para realizar un lanzamiento inmediato deberas utilizar los siguientes acciones:

.env --> DATABASE_URL=postgresql://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD

```bash
npm i
npx prisma generate
```

## PosgrestSQL

Crear la base de datos
```bash
CREATE DATABASE chatbot;
```

## Prisma: datos y comandos utiles

### Inicializar prisma
Creara la carpeta "prisma" en la cual se hayara el archivo schema.prisma, ademas creara un archivo .env para que realizes la conexion a la base de datos
```bash
npx prisma init
```

### Ejemplo utilizado de modelo de tabla
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  pass     String
  rol      String
}

### Estructura de la coneccion
DATABASE_URL=postgresql://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD

### Genera el esquema
```bash
npx prisma generate
```

### Creara el sql de migracion, deberas poner un nombre a esto y luego requerirlo llamandolo cuando lo necesites.
```bash
npx prisma migrate dev
```

### Forzar sincronizacion
```bash
npx prisma db push --force-reset
```
