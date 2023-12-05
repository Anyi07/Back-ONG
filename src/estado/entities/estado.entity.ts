import { Municipio } from 'src/municipio/entities/municipio.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'



@Entity('estado')
export class Estado {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:50})
    name_e:string;

    @OneToMany(type => Municipio, municipio => municipio.estado)
    @JoinColumn()
    municipio:Municipio[];

}
