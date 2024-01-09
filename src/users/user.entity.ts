import { AssociationTwo } from 'src/association-two/entities/association-two.entity';
import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { Person } from 'src/persons/person.entity';
import { Role } from 'src/roles/entities/role.entity';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn, OneToOne} from 'typeorm'


@Entity('users')

export class User extends BaseEntity
{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:25})
    email:string;

    @Column({type:"varchar",length:25})
    password: string;

    @OneToMany(type => AssociationOne, association_one => association_one.users)
    @JoinColumn()
    association_one:AssociationOne[];


    @OneToMany(type => AssociationTwo, associationTwo => associationTwo.users)
    @JoinColumn()
    associationTwo:AssociationTwo[];

    @OneToOne(type => Person, persons => persons.users)
    @JoinColumn()
    persons:Person;

    @OneToOne(type => Role, role => role.users)
    @JoinColumn()
    role:Role;

}