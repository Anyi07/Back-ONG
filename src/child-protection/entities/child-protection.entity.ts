import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('childprotection')
export class ChildProtection extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int",nullable:true})
    lgtbPeopleC:number;

    @Column({type:"int",nullable:true})
    pregnantWomenC:number;
    
    @Column({type:"int",nullable:true})
    abandonmentPerson :number;

    @Column({type:"int",nullable:true})
    legalProtectionP:number;


    @Column({type:"int",nullable:true})
    girls0to5C:number;

    @Column({type:"int",nullable:true})
    boys0to5C:number;

    @Column({type:"int",nullable:true})
    girls6to9C:number;

    @Column({type:"int",nullable:true})
    boys6to9C:number;

    @Column({type:"int",nullable:true})
    girls10to11C:number;

    @Column({type:"int",nullable:true})
    boys10to11C:number;

    @Column({type:"int",nullable:true})
    girls12to14C:number;

    @Column({type:"int",nullable:true})
    boys12to14C:number;

    @Column({type:"int",nullable:true})
    girls15to17C:number;

    @Column({type:"int",nullable:true})
    boys15to17C:number;

    @Column({type:"int",nullable:true})
    women18to59C:number;

    @Column({type:"int",nullable:true})
    men18to59C:number;

    @Column({type:"int",nullable:true})
    menOlderThan60C:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60C:number;

    @Column({type:"int",nullable:true})
    girls0to11C:number;

    @Column({type:"int",nullable:true})
    boys0to11C:number;

    @Column({type:"int",nullable:true})
    girls12to13C:number;

    @Column({type:"int",nullable:true})
    boys12to13C:number;

    @Column({type:"int",nullable:true})
    girls1to17C:number;

    @Column({type:"int",nullable:true})
    boys14to17C:number;

    @Column({type:"int",nullable:true})
    girls0to3C:number;

    @Column({type:"int",nullable:true})
    boys0to3C:number;

    @Column({type:"int",nullable:true})
    girls4to8C:number;

    @Column({type:"int",nullable:true})
    boys4to8C:number;

    @Column({type:"int",nullable:true})
    girls9to17C:number;

    @Column({type:"int",nullable:true})
    boys9to17C:number;

    @OneToOne(type => Project, project => project.childprotection)
    @JoinColumn()
    project:Project[];
}
