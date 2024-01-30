import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('hosting')
export class Hosting extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    kitType:string;

    @Column({type:"varchar",nullable:true})
    reportItem:string;

    @Column({type:"varchar",nullable:true})
    emergencyHousingUnit:string;

    @Column({type:"varchar",nullable:true})
    mediumPowerGeneration:string;

    @Column({type:"int",nullable:true})
    girls0to17:number;

    @Column({type:"int",nullable:true})
    boys0to17:number;

    @Column({type:"int",nullable:true})
    women18to59:number;

    @Column({type:"int",nullable:true})
    men18to59:number;

    @Column({type:"int",nullable:true})
    menOlderThan60:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60:number;


    @OneToOne(type => Project, project => project.hosting)
    @JoinColumn()
    project:Project[];



}
