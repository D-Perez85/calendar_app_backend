//Rutas de Eventos (Events)  -  host + /api/events+ path
const {Router} = require('express');  
const { check } = require('express-validator');
const {validateFields} = require('../middlewares/validate-fields'); 
const { validateJWT } = require('../middlewares/validate-jwt');

const { isDate } = require('../helpers/isDate');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router(); 

// Global Validate with JWT
router.use( validateJWT );


router.get('/', getEvents);
router.post(
    '/',
    [
        check('title', "Title is obligatory").not().isEmpty(),
        check('start','Initial Date is obligatory').custom( isDate ),
        check('end','Ending Date is obligatory').custom( isDate ),
        validateFields
    ], 
    createEvent); 

router.put('/:id',
[
    check('title', "Title is obligatory").not().isEmpty(),
    check('start','Initial Date is obligatory').custom( isDate ),
    check('end','Ending Date is obligatory').custom( isDate ),
    validateFields
], 
updateEvent); 

router.delete('/:id', deleteEvent)

module.exports= router; 