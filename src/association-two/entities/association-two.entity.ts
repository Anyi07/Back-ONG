import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/user.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'

@Entity('associationTwo')
export class AssociationTwo {


    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:25})
    positionA: string;


    @ManyToOne(type => Project, project => project.associationTwo)
    @JoinColumn()
    project:Project[];


    @ManyToOne(type => User, users=> users.associationTwo)
    @JoinColumn()
    users:User[];

}
