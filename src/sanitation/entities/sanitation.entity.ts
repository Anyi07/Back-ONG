import{Entity,Column,PrimaryGeneratedColumn} from 'typeorm'


@Entity('sanitation')
export class Sanitation {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"date"})
    sanitationReport:Date;

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



}
