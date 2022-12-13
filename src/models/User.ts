import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {
    id: number,
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    cpf: string,
    telefone: string,
    dataNascimento: string
}
export const User = sequelize.define<UserInstance>('User',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome: {
        type:DataTypes.STRING,
        allowNull:false
    },
    sobrenome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    senha: {
        type:DataTypes.STRING,
        allowNull:false
    },
    cpf: {
        type:DataTypes.STRING
    },
    telefone: {
        type:DataTypes.STRING
    },
    dataNascimento: {
        type:DataTypes.DATE
    }
},{
    tableName:'usuarios',
    timestamps:false
})