import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm'

@Entity('health')
export class Health {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"date"})
    healthReport:Date;

    @Column({type:"int"})
    girls0to5:number;

    @Column({type:"int"})
    boys0to5:number;

    @Column({type:"int"})
    girls6to19:number;

    @Column({type:"int"})
    boys6to19:number;

    @Column({type:"int"})
    women20to64:number;

    @Column({type:"int"})
    men20to64:number;

    @Column({type:"int"})
    menOlderThan65:number;

    @Column({type:"int"})
    womenOlderThan65:number;





}
