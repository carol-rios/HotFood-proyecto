import RegistroDomicilioControllers from '../controllers/registroDomicilio.js'
import {Router} from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existeRegistroDomicilioByID from '../helpers/registroDomicilio.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
],RegistroDomicilioControllers.registroDomicilioGet);


router.get('/:id', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    validarCampos
],RegistroDomicilioControllers.registroDomicilioGetByid);

router.post('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('Nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('Apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('Telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('Email', 'El email es obligatorio').not().isEmpty(),
  
    validarCampos
],RegistroDomicilioControllers.registroDomicilioPost);

router.put('/:id', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeRegistroDomicilioByID),
    validarCampos
],RegistroDomicilioControllers.registroDomicilioPut);

router.put('/Activar/:id',[
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeRegistroDomicilioByID),
    validarCampos
],RegistroDomicilioControllers.registroDomicilioPutActivar);

router.put('/Desactivar/:id',[
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeRegistroDomicilioByID),
    validarCampos
],RegistroDomicilioControllers.registroDomicilioPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeRegistroDomicilioByID),
    validarCampos
],RegistroDomicilioControllers.registroDomicilioDelete);

export default router