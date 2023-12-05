import{Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm'
import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Project } from 'src/project/entities/project.entity';
@Entity('parroquia')

export class Parroquia {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:50})
    name_p:string;

    @ManyToOne(type => Municipio, municipio =>municipio.parroquia)
    @JoinColumn()
    municipio:Municipio[];
    

    @OneToMany(type => Project, project => project.parroquia)
    @JoinColumn()
    project:Project[];

}