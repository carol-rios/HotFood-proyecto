import MesasControllers from '../controllers/mesa.js'
import {Router} from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existeMesasByID from '../helpers/reservas.js';

const router = Router();

router.get('/',  [ 
    validarJWT,
],MesasControllers.mesaGet);

router.get('/:id',MesasControllers.mesaGetById);

router.post('/',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('CantMesas', 'La cantidad de mesas es obligatorio').not().isEmpty(),
    check('NumMesas', 'El número de mesa es obligatorio').not().isEmpty(),
    validarCampos
],MesasControllers.mesaPost);

router.put('/:id',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeMesasByID),
    validarCampos
],MesasControllers.mesaPut);

router.delete('/:id',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeMesasByID),
    validarCampos
],MesasControllers.mesaDelete);

export default router