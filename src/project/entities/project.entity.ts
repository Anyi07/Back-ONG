import { register } from 'module';
import { AssociationTwo } from 'src/association-two/entities/association-two.entity';
import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { BaseEntity } from 'src/base-entity';
import { Education } from 'src/education/entities/education.entity';
import { FoodSafety } from 'src/food_safety/entities/food_safety.entity';
import { Health } from 'src/health/entities/health.entity';
import { Parroquia } from 'src/parroquia/entities/parroquia.entity';
import { Register } from 'src/register/entities/register.entity';
import { Sanitation } from 'src/sanitation/entities/sanitation.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, OneToOne} from 'typeorm'

@Entity('project')

export class Project {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:50})
    projectName:string;

    @Column({type:"varchar",length:10})
    monetaryFound:string;

    @Column({type:"varchar",length:50})
    establishment_details:string;

    @Column({type:"float"})
    latitude:number;

    @Column({type:"float"})
    longitude:number;

    @Column({type:"int"})
    indirectBenef:number;

    @Column({type:"int"})
    recurringBenef:number;

    @Column({type:"int"})
    disabledPopulation:number;

    @Column({type:"int"})
    nativePopulation:number;

    @Column({type:"int"})
    assistedPeople:number;

    @Column({type:"varchar",length:250})
    projectUbication:string;

    @OneToMany(type => Register, register => register.project)
    @JoinColumn()
    register:Register[];


    @ManyToOne(type => Parroquia, parroquia =>parroquia.project)
    @JoinColumn()
    parroquia:Parroquia[];

    @OneToMany(type => AssociationOne, association_one => association_one.project)
    @JoinColumn()
    association_one:AssociationOne[];

    @OneToMany(type => AssociationTwo, associationTwo => associationTwo.project)
    @JoinColumn()
    associationTwo:AssociationTwo[];

    
    @OneToOne(type => FoodSafety, foodSafety => foodSafety.project)
    @JoinColumn()
    foodSafety:FoodSafety[]; 

    @OneToOne(type => Education, education=> education.project)
    @JoinColumn()
    education:Education[]; 

    @OneToOne(type => Health, health=>health.project)
    @JoinColumn()
    health:Health[]; 

    @OneToOne(type => Sanitation, sanitation=>sanitation.project)
    @JoinColumn()
    sanitation:Sanitation[]; 

}
