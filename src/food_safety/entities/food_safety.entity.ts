import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany, OneToOne} from 'typeorm'

@Entity('foodSafety')

export class FoodSafety extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    

    @Column({type:"int"})
    girls0to17F:number;

    @Column({type:"int"})
    boys0to17F:number;

    
    @Column({type:"int"})
    women18to59F:number;

    @Column({type:"int"})
    men18to59F:number;

    @Column({type:"int"})
    menOlderThan60F:number;

    @Column({type:"int"})
    womenOlderThan60F:number;
    

    @OneToOne(type => Project, project => project.foodSafety)
    @JoinColumn()
    project:Project[];



}
