const express = require('express'); 

//Create Server 
const app = express(); 
const port = 4000; 


//Routes
app.get('/', (req, res)=>{
    res.json({
        ok: true
    })
})


//Listen to the port
app.listen(port, ()=>{
    console.log(`Activo en puerto ${port}`);
}); 


