import CategoriaControllers from '../controllers/categoria.js';
import { Router } from 'express';
import { validarJWT } from '../middlewares/validar_jwt.js';
import validarROLES from '../middlewares/validar-rol.js';
import { validarCampos } from '../middlewares/validas-campos.js';
import { check } from 'express-validator';
import existeCategoriaByID from '../helpers/categoria.js';

const router = Router()

router.get('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL'),
], CategoriaControllers.categoriaGet);

router.post('/', [
    validarJWT,
    validarROLES ('ADMIN_ROL') ,
    check('Nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], CategoriaControllers.categoriaPost);

router.put('/:id', [
    validarJWT,
    validarROLES ('ADMIN_ROL'),
    validarCampos,
    check('id', 'No es un ID valido').isMongoId(),
    check ('id').custom(existeCategoriaByID),

], CategoriaControllers.categoriaPut);

router.delete('/:id', [
    validarJWT,
    validarROLES ('ADMIN_ROL'),
    validarCampos,
    check('id', 'No es un ID valido').isMongoId(),//Si borra, pero cuando el id no existe no muestra el mensaje con el error 
    check ('id').custom(existeCategoriaByID),
] ,CategoriaControllers.categoriaDelete);

export default router