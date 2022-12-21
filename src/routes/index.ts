import {Router} from 'express'
import * as authController from '../controllers/authController'

const router = Router()

router.get('/',(req,res) =>{
    res.render("pages/home")
})


//rotas de visualização login e register
router.get('/login',authController.login)
router.get('/register',authController.register)

//criando o post do register
router.post('/register',authController.registerPost)


export default router 