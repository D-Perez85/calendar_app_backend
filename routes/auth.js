//Rutas de Usuarios (Auth)  -  host + /api/auth+ path

const {Router} = require('express') 
const router = Router(); 

const {createUser, loginUser, revalidateToken} = require('../controllers/auth')

router.post('/new', createUser); 

router.post('/',loginUser); 

router.get('/revalidate', revalidateToken)

module.exports= router; 