import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('persons')
export class Person {

    @PrimaryGeneratedColumn()
    id:number

    @PrimaryColumn()
    cedula:number

    
    @Column({type:"varchar" ,length: 25, })
    first_name: string

    @Column({type:"varchar" ,length: 25, })
    last_name: string

    @Column({type:"varchar" ,length: 15, })
    phone: string

    @Column({type:"varchar" ,length: 50, })
    address: string

    @OneToOne(type => User, users => users.persons)
    @JoinColumn()
    users:User;


}