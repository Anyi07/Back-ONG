import { BaseEntity } from 'src/base-entity';
import { Project } from 'src/project/entities/project.entity';
import{Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'



@Entity('register')
export class Register extends BaseEntity {

  @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne(type => Project, project =>project.register)
    @JoinColumn()
    project:Project[];

    

}
