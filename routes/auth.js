//Rutas de Usuarios (Auth)  -  host + /api/auth+ path

const {Router} = require('express');  
const { check } = require('express-validator');

const router = Router(); 

const {createUser, loginUser, revalidateToken} = require('../controllers/auth')

router.post('/new', 
            [   //middleware
                check('name', 'El nombre es obligatorio').not().isEmpty(), 
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 })
            ],  createUser); 

router.post('/',
            [   //middleware
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 })
            ],  loginUser); 

router.get('/revalidate', revalidateToken)
module.exports= router; 