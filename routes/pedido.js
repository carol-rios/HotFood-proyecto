
import PedidoControllers from '../controllers/pedido.js'
import {Router} from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existePedidoByID from '../helpers/pedido.js';


const router = Router();

router.get('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
],PedidoControllers.pedidoGet);

router.get('/',PedidoControllers.pedidoGetByid);

router.post('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('Cantidad', 'Cantidad es obligatorio').not().isEmpty(),
    check('Valor_Total', 'Valor Total es obligatoria').not().isEmpty(),
 
    validarCampos
    ], PedidoControllers.pedidoPost);

router.put('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existePedidoByID),

    validarCampos
], PedidoControllers.pedidoPut);

router.delete('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existePedidoByID),

    validarCampos
],PedidoControllers.pedidoDelete);

export default router