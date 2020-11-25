const express = require('express');
const app = express();
const {port} = require('./config')

const coursesRouters = require('./src/routes/courses')
const studentsRouters = require('./src/routes/students')
const teacherRouters = require('./src/routes/teacher')

app.use(express.json())

app.use('/courses', coursesRouters)
app.use('/students', studentsRouters)
app.use('/teachers', teacherRouters)


app.listen(port, ()=>{
    console.log('server listyen on port', port);
})