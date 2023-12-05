import{Entity,Column,PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm'

@Entity('foodSafety')

export class FoodSafety {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:"date"})
    sanitationReport:Date;

    @Column({type:"int"})
    girls0to17F:number;

    @Column({type:"int"})
    boys0to17F:number;

    
    @Column({type:"int"})
    women18to59F:number;

    @Column({type:"int"})
    men18to59F:number;

    @Column({type:"int"})
    menOlderThan60F:number;

    @Column({type:"int"})
    womenOlderThan60F:number;
    



}
