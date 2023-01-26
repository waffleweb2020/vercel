import {Column, Model, Table} from "sequelize-typescript";


@Table({tableName: 'post'})
export class PostModel extends Model {
    @Column
    id: number

    @Column
    title: string
}