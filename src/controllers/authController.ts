import { Request, Response } from "express"
import { User } from "../models/User"


export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const register =(req:Request, res:Response) =>{
    res.render('pages/register')
}
