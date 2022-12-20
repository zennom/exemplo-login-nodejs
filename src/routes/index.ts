import {Router} from 'express'
import * as authController from '../controllers/authController'

const router = Router()

router.get('/',(req,res) =>{
    res.render("pages/home")
})

router.get('/login',authController.login)

router.get('/register',authController.register)




export default router 