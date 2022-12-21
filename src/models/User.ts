import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {
    id: number,
    name: string,
    email: string,
    password: string,
}
export const User = sequelize.define<UserInstance>('User',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false

    }
},{
    tableName:'usuarios',
    timestamps:false
})