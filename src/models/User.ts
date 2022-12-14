import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {
    id: number,
    nome: string,
    email: string,
    senha: string,
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
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    senha: {
        type:DataTypes.STRING,
        allowNull:false

    }
},{
    tableName:'usuarios',
    timestamps:false
})