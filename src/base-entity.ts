import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';


export class BaseEntity{
@PrimaryGeneratedColumn()
id?:number;

@CreateDateColumn({type: "timestamp", nullable:true})
createdAt?:Date;

@CreateDateColumn({type: "timestamp", nullable:true})
updateAt?:Date;


}