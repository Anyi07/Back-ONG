import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn, OneToOne} from 'typeorm'


@Entity('role')
export class Role {

    @PrimaryGeneratedColumn()
    id:number;

    
    @Column({type:"varchar",length:50})
    nameRole:string;

    

}
