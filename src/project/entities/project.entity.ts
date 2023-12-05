import { register } from 'module';
import { AssociationTwo } from 'src/association-two/entities/association-two.entity';
import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { Parroquia } from 'src/parroquia/entities/parroquia.entity';
import { Register } from 'src/register/entities/register.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'

@Entity('project')

export class Project {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:50})
    projectName:string;

    @Column({type:"varchar",length:10})
    monetaryFound:string;

    @Column({type:"varchar",length:50})
    establishment_details:string;

    @Column({type:"float"})
    latitude:number;

    @Column({type:"float"})
    longitude:number;

    @Column({type:"date"})
    startDate:Date;

    @Column({type:"date"})
    finishDate:Date;

    @Column({type:"int"})
    indirectBenef:number;

    @Column({type:"int"})
    recurringBenef:number;

    @Column({type:"int"})
    disabledPopulation:number;

    @Column({type:"int"})
    nativePopulation:number;

    @Column({type:"int"})
    assistedPeople:number;

    @Column({type:"varchar",length:250})
    projectUbication:string;

    @OneToMany(type => Register, register => register.project)
    @JoinColumn()
    register:Register[];


    @ManyToOne(type => Parroquia, parroquia =>parroquia.project)
    @JoinColumn()
    parroquia:Parroquia[];

    @OneToMany(type => AssociationOne, association_one => association_one.project)
    @JoinColumn()
    association_one:AssociationOne[];

    @OneToMany(type => AssociationTwo, associationTwo => associationTwo.project)
    @JoinColumn()
    associationTwo:AssociationTwo[];

    
}
