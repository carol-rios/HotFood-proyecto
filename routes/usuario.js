import UsuarioControllers from '../controllers/usuario.js'
import {Router} from 'express';

const router = Router();

router.get('/', UsuarioControllers.usuarioGet);

router.get('/:id',UsuarioControllers.usuarioGetByid);

router.post('/' ,UsuarioControllers.usuarioPost);

router.put('/:id', UsuarioControllers.usuarioPut);

router.post('/login',UsuarioControllers.login);

router.put('/Activar/:id', UsuarioControllers.usuarioPutActivar);

router.put('/Desactivar/:id',UsuarioControllers.usuarioPutDesactivar);

router.delete('/:id', UsuarioControllers.usuarioDelete);

export default router