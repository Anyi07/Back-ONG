import { cluster } from 'src/enum/cluster';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/user.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'


@Entity('associationTwo')
export class AssociationTwo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    positionA: string;

    @Column({type:"varchar",nullable:true})
    cluster: string;

    @Column({type:"varchar",nullable:true})
    desiredNumber: number;

    @Column({type:"varchar",nullable:true})
    targetNumberPerson: number;

    @Column({type:"varchar",nullable:true})
    projectsToCulminateYearly: number;

    @Column({type:"varchar",nullable:true})
    projectstoCulminateMonthly: number;

    @Column({type:"varchar",nullable:true})
    peopleToAssistYearly: number;

    @Column({type:"varchar",nullable:true})
    peopleToAssistMonthly: number;

    @Column({type:"varchar",nullable:true})
    attendedCoursesMonthly: number;

    @Column({type:"varchar",nullable:true})
    attendedCoursesYearly: number;


    @ManyToOne(type => Project, project => project.associationTwo)
    @JoinColumn()
    project:Project[];


    @ManyToOne(type => User, users=> users.associationTwo)
    @JoinColumn()
    users:User[];

}
