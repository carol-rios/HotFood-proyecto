import PedidoControllers from '../controllers/pedido.js'
import { Router } from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import validarPedios from '../helpers/pedido.js';


const router = Router();

router.get('/', [
    validarJWT,
    validarROLES('ADMIN_ROL'),
], PedidoControllers.pedidoGet);

router.get('/', PedidoControllers.pedidoGetByid);

router.post('/', [
    validarJWT,
    validarROLES('ADMIN_ROL'),
    check('Valor_total', 'Valor Total es obligatoria').not().isEmpty(),
    check('id_domicilio', 'El Id del domicilio es obligatoria').not().isEmpty(),
    check('id_domicilio', 'El domicilio ingrsado no es valido ').isMongoId(),
    check('id_domicilio').custom(validarPedios.domiciliosId),
    validarCampos
], PedidoControllers.pedidoPost);

router.put('/', [
    validarJWT,
    validarROLES('ADMIN_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validarPedios.existePedidoByID),

    validarCampos
], PedidoControllers.pedidoPut);

router.delete('/', [
    validarJWT,
    validarROLES('ADMIN_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validarPedios.existePedidoByID),

    validarCampos
], PedidoControllers.pedidoDelete);

export default router