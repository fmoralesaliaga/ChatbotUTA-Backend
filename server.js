const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

const usersRouter = require('./routes/users');
const departmentsRouter = require('./routes/departments'); 
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
const profilesRouter = require('./routes/profiles');
const permissionsRouter = require('./routes/permissions');


app.use('/api/users', usersRouter);
app.use('/api/departments', departmentsRouter); 
app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter); 
app.use('/api/profiles', profilesRouter); 
app.use('/api/permissions', permissionsRouter); 


app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
