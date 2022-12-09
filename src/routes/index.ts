import {Router} from 'express'
import * as authController from '../controllers/authController'

const router = Router()

router.get('/',(req,res) =>{
    res.send("Teste")
})

router.get('/login',authController.login)

export default router 