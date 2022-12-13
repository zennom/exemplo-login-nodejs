import {Request, Response} from 'express'
import { User } from "../models/User"

export const login = async (req:Request, res:Response) => {
    // Busca no banco de dados um usuário pelos campos especificados
    const user = await User.findOne({
          // attribute: atributos nos quais o metodo findOne irá procurar
          attributes: ['id', 'email', 'senha'],
          // onde o email é igual ao que foi recebido pelo corpo da requisição
          where: {
              email: req.body.email
          }
    })

    res.render('pages/login')
}