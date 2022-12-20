import { Request, Response } from "express"
import { User } from "../models/User"
//criptografando a senha com bcrypt
import bcrypt from 'bcrypt'



//rotas de visualização login e register
export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const register = (req:Request, res:Response) =>{
    res.render('pages/register')
}

export const registerPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {name,email,password,confirmpassword} = req.body

    //se password for diferente de confirmpassword
    if(password != confirmpassword){
        //enviar uma mensagem de erro ao usuário com flashmessage
    }



}