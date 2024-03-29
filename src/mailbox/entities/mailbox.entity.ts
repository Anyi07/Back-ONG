import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { BaseEntity } from 'src/base-entity';
import { inputType } from 'src/enum/inputType';
import { Person } from 'src/persons/person.entity';
import { User } from 'src/users/user.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'

@Entity('mailbox')
export class Mailbox extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    inputType:string;

    @Column({type:"varchar",nullable:true})
    inputStatus:string;

    @Column({type:"varchar",nullable:true})
    commentM:string;

    @OneToMany(type => AssociationOne, association_one => association_one.mailbox)
    @JoinColumn()
    association_one:AssociationOne[];

    @ManyToOne(type => User, users => users.mailbox)
    @JoinColumn()
    users:User[];  

    @ManyToOne(type => Person, persons=> persons.mailbox)
    @JoinColumn()
    persons:Person[];


}
