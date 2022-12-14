import { Request, Response } from 'express'
import { User } from "../models/User"

export const login = async (req: Request, res: Response) => {
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

export const logout = (req: Request, res: Response) => {
    // Exclui a sessão do usuário
    req.session.destroy()

    // Redireciona para a página inicial
    return res.redirect('/login')
}

export const renderLogin = (req:Request, res:Response) => {
    // Verifica se o usuário está logado
    // Ou seja, se existe uma sessão para o usuário
    if (req.session.user != undefined) {
        // Se estiver logado, redireciona para a página restrita
        return res.redirect('/account');
    }

    // Renderiza a página de login
    return res.render('login');
}

