import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { BaseEntity } from 'src/base-entity';
import { inputType } from 'src/enum/inputType';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'

@Entity('mailbox')
export class Mailbox extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    inputType:string;

    @Column({type:"varchar",nullable:true})
    inputStatus:string;

    @OneToMany(type => AssociationOne, association_one => association_one.mailbox)
    @JoinColumn()
    association_one:AssociationOne[];

}
