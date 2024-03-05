import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('vgbprotection')
export class VbgProtection  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int",nullable:true})
    lgtbPeopleV:number;

    @Column({type:"int",nullable:true})
    pregnantWomenV:number;
    
    @Column({type:"int",nullable:true})
    physicalProtectionV:number;

    @Column({type:"int",nullable:true})
    legalProtectionV:number;

    @Column({type:"int",nullable:true})
    girls0to9V:number;

    @Column({type:"int",nullable:true})
    boys0to9V:number;

    @Column({type:"int",nullable:true})
    girls10to14V:number;

    @Column({type:"int",nullable:true})
    boys16to14V:number;

    @Column({type:"int",nullable:true})
    girls15to19V:number;

    @Column({type:"int",nullable:true})
    boys15to19V:number;

    @Column({type:"int",nullable:true})
    women20to59V:number;

    @Column({type:"int",nullable:true})
    men20to59V:number;

    @Column({type:"int",nullable:true})
    menOlderThan60V:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60V:number;

    @OneToOne(type => Project, project => project.vgbprotection)
    @JoinColumn()
    project:Project[];
}



