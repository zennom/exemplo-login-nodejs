import { Request, Response } from "express"
import { User } from "../models/User"
//criptografando a senha com bcrypt
import bcrypt from 'bcrypt'

//rotas de visualização login e register
export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const register = (req:Request, res:Response) =>{

    const error = req.flash('error')
    console.log(error)

    res.render('pages/register', { error })
}

export const registerPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {name,email,password,confirmpassword} = req.body

    //se password for diferente de confirmpassword
    if(password != confirmpassword){
        //enviar uma mensagem de erro ao usuário com flashmessage
        
        req.flash('error','As senhas não conferem, tente novamente')

        res.redirect('/register')

        
        
    }

    /*

    //checar se o usuário existe

    const checkIfUserExists = await User.findOne({

        where:{email:email}

    })

    //se o usuário existir exibir uma flash message

    if(checkIfUserExists){
        req.flash('message','O e-mail já está em uso')
        res.render('pages/register')

        return
    }
*/

}