const express = require('express'); 
require('dotenv').config();

//Create Server 
const app = express(); 

//Directorio Publico
app.use(express.static('public'))

//Routes
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// })

//Listen to the port
app.listen(process.env.PORT, ()=>{
    console.log(`Activo en puerto ${process.env.PORT}`);
}); 


