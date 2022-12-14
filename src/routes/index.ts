import {Router} from 'express'
import * as authController from '../controllers/authController'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/',(req,res) =>{
    res.send("Teste")
})

router.get('/login',authController.login)

// Renderiza a página de cadastro de usuário
router.get('/cadastro', UserController.renderFormRegister);

// Rota para cadastrar um novo usuário
router.post('/cadastro', UserController.createNewUser);

// Renderiza a página inicial de login
router.get('/login', authController.renderLogin);

// Rota para fazer o login do usuário
router.post('/login', authController.login);



export default router 