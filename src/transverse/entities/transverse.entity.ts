import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('transverse')
export class Transverse extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    channelUsed:string;

    @Column({type:"varchar",nullable:true})
    topicsAddressed:string;

    @Column({type:"int",nullable:true})
    girls0to17T:number;

    @Column({type:"int",nullable:true})
    boys0to17T:number;

    @Column({type:"int",nullable:true})
    women18to59T:number;

    @Column({type:"int",nullable:true})
    men18to59T:number;

    @Column({type:"int",nullable:true})
    menOlderThan60T:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60T:number;

    @OneToOne(type => Project, project => project.transverse)
    @JoinColumn()
    project:Project[];

    
}