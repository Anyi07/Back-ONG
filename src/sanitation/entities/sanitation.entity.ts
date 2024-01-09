import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'


@Entity('sanitation')
export class Sanitation  extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;


    @Column({type:"int"})
    girls0to17S:number;

    @Column({type:"int"})
    boys0to17S:number;

    
    @Column({type:"int"})
    women18to59S:number;

    @Column({type:"int"})
    men18to59S:number;

    @Column({type:"int"})
    menOlderThan60S:number;

    @Column({type:"int"})
    womenOlderThan60S:number;


    @OneToOne(type => Project, project => project.sanitation)
    @JoinColumn()
    project:Project[];
}
