import { AssociationOne } from "src/association_one/entities/association_one.entity";
import { BaseEntity } from "src/base-entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('persons')
export class Person extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number

    @PrimaryColumn({unique:true, type:"varchar"})
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

    @OneToMany(type => AssociationOne, association_one => association_one.persons)
    @JoinColumn()
    association_one:AssociationOne[]; 

}