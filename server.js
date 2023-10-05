const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRouter = require('./routes/users');
const departmentsRouter = require('./routes/departments'); 
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');

app.use('/api/users', usersRouter);
app.use('/api/departments', departmentsRouter); 
app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter); 

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
