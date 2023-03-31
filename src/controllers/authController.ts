import { Request, Response } from "express"
import { User } from "../models/User"
//criptografando a senha com bcrypt
import bcrypt from 'bcrypt'

//rotas de visualização login e register
export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const register = (req:Request, res:Response) =>{

    const message = req.flash('message')
    //console.log(error)

    res.render('pages/register', { message })
}

export const registerPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {name,email,password,confirmpassword} = req.body

    //se password for diferente de confirmpassword
    if(password != confirmpassword){
        //enviar uma mensagem de erro ao usuário com flashmessage
        
        req.flash('message','As senhas não conferem, tente novamente')

        res.redirect('/register')
        
        return
    }
    
    //checar se o usuário existe
    const checkIfUserExists = await User.findOne({

        where:{email:email}

    })

    //se o usuário existir exibir uma flash message
    if(checkIfUserExists){
        req.flash('message','O e-mail já está em uso')
        res.redirect('/register')

        return
    }

    //criar o password

    /*vamos dificultar a senha para o hacker não conseguir 
    quebrar a senha , então vamos por 10 caracteres randomicos */

    const salt = bcrypt.genSaltSync(10)
    //gerar a hash com o meu salt para o usuário 
    const hashedPassword = bcrypt.hashSync(password,salt)

    /*agora vamos criar um objeto de usuário 
    com os dados recebidos 
    obs.: estamos usando try - catch para
    prevenir algum erro*/
    try{
        /* criando o usuário no banco */
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        //const createdUser = await User.create(user);
        //inicializar a sessão
        //req.session.userId = createdUser.id

        req.session.userId = JSON.stringify(user.id)


        req.flash('message','cadastro realizado com sucesso')

        //salvar a sessão
        //para garantir que meu usuário seja salvo
        //antes de redirecioná-lo para /
        req.session.save(() =>{
            res.redirect('/')
        })

    } catch(err){
        console.log(err)
    }
}

export const logout = (req:Request, res:Response) =>{
    /*aqui precisamos ter acesso a session
    para destruir o login do usuário */

    req.session.destroy()

    res.redirect('/')

}
