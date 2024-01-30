import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('protection')
export class Protection extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int",nullable:true})
    girls0to17P:number;

    @Column({type:"int",nullable:true})
    boys0to17P:number;

    @Column({type:"int",nullable:true})
    women18to59P:number;

    @Column({type:"int",nullable:true})
    men18to59P:number;

    @Column({type:"int",nullable:true})
    menOlderThan60P:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60P:number;

    @Column({type:"int",nullable:true})
    lgtbPeople:number;

    @Column({type:"int",nullable:true})
    pregnantWomen:number;

    @Column({type:"int",nullable:true})
    legalProtection:number;

    @Column({type:"int",nullable:true})
    physicalProtection :number;

    @OneToOne(type => Project, project => project.protection)
    @JoinColumn()
    project:Project[];

    
    


}

