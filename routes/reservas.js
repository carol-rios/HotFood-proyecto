import ReservasControllers from '../controllers/reservas.js'
import {Router} from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existeReservasByID from '../helpers/reservas.js';

const router = Router();

router.get('/',  [ 
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
],ReservasControllers.reservasGet);

router.get('/:id',ReservasControllers.reservasGetById);

router.post('/',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('Nombres', 'EL nombre es obligatorio').not().isEmpty(),
    check('Email', 'El email es obligatorio').not().isEmpty(),
    check('Telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('Fecha', 'La Fecha es obligatorio').not().isEmpty(),
    check('Hora', 'La Hora es obligatorio').not().isEmpty(),
    validarCampos
],ReservasControllers.reservasPost);


router.put('/:id',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeReservasByID),
    validarCampos
],ReservasControllers.reservasPut);

router.delete('/:id',  [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeReservasByID),
    validarCampos
],ReservasControllers.reservasDelete);

export default router