import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'


@Entity('sanitation')
export class Sanitation  extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;


    @Column({type:"int",nullable:true})
    girls0to17S:number;

    @Column({type:"int",nullable:true})
    boys0to17S:number;

    
    @Column({type:"int",nullable:true})
    women18to59S:number;

    @Column({type:"int",nullable:true})
    men18to59S:number;

    @Column({type:"int",nullable:true})
    menOlderThan60S:number;

    @Column({type:"int",nullable:true})
    womenOlderThan60S:number;

    @OneToOne(type => Project, project => project.sanitation)
    @JoinColumn()
    project:Project[];
}
