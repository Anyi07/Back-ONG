import { Mailbox } from 'src/mailbox/entities/mailbox.entity';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/user.entity';
import { Person } from 'src/persons/person.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'
import { BaseEntity } from 'src/base-entity';


@Entity('association_one')
export class AssociationOne extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;


    @Column({type:"varchar"}) //se quito el limite de caracteres para caracteres practicos de brutalidad del usuario
    commentA:string;


  

    @ManyToOne(type => Mailbox, mailbox => mailbox.association_one)
    @JoinColumn()
    mailbox:Mailbox[];

    @ManyToOne(type => User, users=> users.association_one)
    @JoinColumn()
    users:User[];

    @ManyToOne(type => Person, persons=> persons.association_one)
    @JoinColumn()
    persons:Person[];

}
