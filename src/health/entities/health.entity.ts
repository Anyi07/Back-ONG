import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('health')
export class Health extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    subaticity:string;

    @Column({type:"varchar",nullable:true})
    criticalServices:string;

    @Column({type:"int",nullable:true})
    girls0to5:number;

    @Column({type:"int",nullable:true})
    boys0to5:number;

    @Column({type:"int",nullable:true})
    girls6to19:number;

    @Column({type:"int",nullable:true})
    boys6to19:number;

    @Column({type:"int",nullable:true})
    women20to64:number;

    @Column({type:"int",nullable:true})
    men20to64:number;

    @Column({type:"int",nullable:true})
    menOlderThan65:number;

    @Column({type:"int",nullable:true})
    womenOlderThan65:number;


    @OneToOne(type => Project, project => project.health)
    @JoinColumn()
    project:Project[];



}
