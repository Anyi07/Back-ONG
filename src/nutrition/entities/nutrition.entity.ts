import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('nutrition')
export class Nutrition extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int",nullable:true})
    girls0to5M:number;

    @Column({type:"int",nullable:true})
    boys0to5M:number;

    @Column({type:"int",nullable:true})
    girls6to59m:number;

    @Column({type:"int",nullable:true})
    boys6to59M:number;

    @Column({type:"int",nullable:true})
    girls5to15:number;

    @Column({type:"int",nullable:true})
    boys5to15:number;


    @Column({type:"int",nullable:true})
    women18to59N:number;

    @Column({type:"int",nullable:true})
    men18to59N:number;

    @Column({type:"int",nullable:true})
    pregnantGirls:number;

    @Column({type:"int",nullable:true})
    pregnantWomen:number;
    
    @Column({type:"int",nullable:true})
    lactatingGirls:number;

     @Column({type:"int",nullable:true})
     lactatingWomen:number;

    @OneToOne(type => Project, project => project.nutrition)
    @JoinColumn()
    project:Project[];

    
    


}
