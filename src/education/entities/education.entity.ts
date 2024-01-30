import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('education')
export class Education extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int",nullable:true})
    girls0to2E:number;

    @Column({type:"int",nullable:true})
    boys0to2E:number;

    @Column({type:"int",nullable:true})
    girls3to5E:number;

    @Column({type:"int",nullable:true})
    boys3to5E:number;

    @Column({type:"int",nullable:true})
    girls6to11E:number;

    @Column({type:"int",nullable:true})
    boys6to11E:number;

    @Column({type:"int",nullable:true})
    girls12to17E:number;

    @Column({type:"int",nullable:true})
    boys12to17E:number;

    @Column({type:"int",nullable:true})
    girls18to19E:number;

    @Column({type:"int",nullable:true})
    boys18to19E:number;

    @Column({type:"int",nullable:true}) //de 64 a 59 (avisar a anyelit)
    women20to59E:number;

    @Column({type:"int",nullable:true}) //de 64 a 59 (avisar a anyelit)
    men20to59E:number;

    @Column({type:"int",nullable:true})
    menOlderThan60E:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60E:number;

    @OneToOne(type => Project, project => project.education)
    @JoinColumn()
    project:Project[];

    
    


}
