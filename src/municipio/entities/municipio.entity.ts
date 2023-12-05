import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'
import { Parroquia } from 'src/parroquia/entities/parroquia.entity';
import { Estado } from 'src/estado/entities/estado.entity';

@Entity('municipio')
export class Municipio {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:50})
    name_m:string;


   @OneToMany(type => Parroquia, parroquia => parroquia.municipio)
    @JoinColumn()
    parroquia: Parroquia[];


    @ManyToOne(type => Estado, estado =>estado.municipio)
    @JoinColumn()
    estado:Estado[];
}
