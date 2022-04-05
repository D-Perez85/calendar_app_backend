const express = require('express'); 
require('dotenv').config();
const { dbConnection } = require('./database/config');

//Create Server 
const app = express(); 

//Base de Datos
dbConnection(); 

//Directorio Publico
app.use(express.static('public')); 

//Lectura y parseo del Body
app.use(express.json()); 

//Routes
app.use('/api/auth', require('./routes/auth')); 

//Listen to the port
app.listen(process.env.PORT, ()=>{
    console.log(`Activo en puerto ${process.env.PORT}`);
}); 





