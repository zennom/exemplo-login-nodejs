import {Router} from 'express'
//import * as authController from '../controllers/authController'
//import * as UserController from '../controllers/userController'

const router = Router()

router.get('/',(req,res) =>{
    res.render("pages/home")
})





export default router 