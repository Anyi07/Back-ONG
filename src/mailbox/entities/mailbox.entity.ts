import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'

@Entity('mailbox')
export class Mailbox {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:15})
    inputType:string;


    @Column({type:"varchar"})
    inputStatus:string;


    @OneToMany(type => AssociationOne, association_one => association_one.mailbox)
    @JoinColumn()
    association_one:AssociationOne[];

}
