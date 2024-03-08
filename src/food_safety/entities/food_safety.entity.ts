import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany, OneToOne} from 'typeorm'

@Entity('foodSafety')

export class FoodSafety extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:"int",nullable:true})
    centersServed:number;

    @Column({type:"int",nullable:true})
    assistedLiving:number;

    @Column({type:"int",nullable:true})
    girls0to17F:number;

    @Column({type:"int",nullable:true})
    boys0to17F:number;

    
    @Column({type:"int",nullable:true})
    women18to59F:number;

    @Column({type:"int",nullable:true})
    men18to59F:number;

    @Column({type:"int",nullable:true})
    menOlderThan60F:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60F:number;


    @OneToOne(type => Project, project => project.foodSafety)
    @JoinColumn()
    project:Project[];



}
