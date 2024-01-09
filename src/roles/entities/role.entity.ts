import { User } from 'src/users/user.entity';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn, OneToOne} from 'typeorm'


@Entity('role')
export class Role {

    @PrimaryGeneratedColumn()
    id:number;

    
    @Column({type:"varchar",length:20})
    nameRole:string;

    @OneToOne(type => User, users => users.role)
    @JoinColumn()
    users:User;

}
