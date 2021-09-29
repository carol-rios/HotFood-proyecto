import MenuControllers from '../controllers/menú.js'
import {Router} from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existeMenuByID from '../helpers/menú.js';

const router=Router()

router.get('/', [ //No me devuelve la informacion en postman
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    
], MenuControllers.menuGet);

router.get('/:id',MenuControllers.menuGetByid);

router.post('/',[
validarJWT,
validarROLES ('ADMIN_ROL') ,
check('Nombre', 'Nombre es obligatorio').not().isEmpty(),
check('Categoria', 'Categoria es obligatoria').not().isEmpty(),
check('Precio', 'Precio es obligatorio').not().isEmpty(),
validarCampos
], MenuControllers.menuPost);

router.put('/:id',[
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeMenuByID),
    validarCampos
], MenuControllers.menuPut);

router.delete('/:id',[
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeMenuByID),

    validarCampos
], MenuControllers.menuDelete);

export default router