import { cluster } from 'src/enum/cluster';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/user.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'


@Entity('associationTwo')
export class AssociationTwo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    positionA: string;

    @Column({type:"varchar"})
    cluster: string;

    @Column({type:"varchar"})
    desiredNumber: number;

    @ManyToOne(type => Project, project => project.associationTwo)
    @JoinColumn()
    project:Project[];


    @ManyToOne(type => User, users=> users.associationTwo)
    @JoinColumn()
    users:User[];

}
