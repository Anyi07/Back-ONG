import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('education')
export class Education extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int"})
    girls0to2E:number;

    @Column({type:"int"})
    boys0to2E:number;

    @Column({type:"int"})
    girls3to5E:number;

    @Column({type:"int"})
    boys3to5E:number;

    @Column({type:"int"})
    girls6to11E:number;

    @Column({type:"int"})
    boys6to11E:number;

    @Column({type:"int"})
    girls12to17E:number;

    @Column({type:"int"})
    boys12to17E:number;

    @Column({type:"int"})
    girls18to19E:number;

    @Column({type:"int"})
    boys18to19E:number;

    @Column({type:"int"})
    women20to64E:number;

    @Column({type:"int"})
    men20to64E:number;

    @Column({type:"int"})
    menOlderThan60E:number;

    @Column({type:"int"})
    womenOlderThan60E:number;
    

    @OneToOne(type => Project, project => project.education)
    @JoinColumn()
    project:Project[];

    
    


}
