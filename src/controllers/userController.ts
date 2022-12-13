// ============================================================
// Controller responsável pelo cadastro de um usuário no banco
// ============================================================
import { Request, Response } from 'express'
import { User } from "../models/User"
import bcrypt from 'bcrypt'

const saltRounds = 10;

export const index = async (req: Request, res: Response) => {

    let usuarios = await User.findAll()
}
// metodo para renderizar a página de criação de um novo usuário
export const renderFormRegister = (req: Request, res: Response) => {

    if (req.session.user != undefined) {
        // Se estiver logado, redireciona para a página restrita
        return res.redirect('/account');
    }

    // Renderiza a página de cadastro de usuário
    return res.render('cadastro');
}
// método para fazer a gravação no banco de dados dos usuários
export const createNewUser =  async (req: Request, res: Response) =>{
     // essa variável armazena os dados recebidos via body
    const {nome, sobrenome, email, senha} = req.body

    const hash = bcrypt.hashSync(senha, saltRounds)

    // esse resultado é assincrono e faz a inclusão no DB dos parametros armazenados anteriormente
    await User.create({
        nome,
        sobrenome,
        email,
        senha: hash
    })

    return res.redirect('/')
}

