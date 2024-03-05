import { register } from 'module';
import { AssociationTwo } from 'src/association-two/entities/association-two.entity';
import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { BaseEntity } from 'src/base-entity';
import { ChildProtection } from 'src/child-protection/entities/child-protection.entity';
import { Education } from 'src/education/entities/education.entity';
import { FoodSafety } from 'src/food_safety/entities/food_safety.entity';
import { Health } from 'src/health/entities/health.entity';
import { Hosting } from 'src/hosting/entities/hosting.entity';
import { Nutrition } from 'src/nutrition/entities/nutrition.entity';
import { Parroquia } from 'src/parroquia/entities/parroquia.entity';
import { Protection} from 'src/protection/entities/protection.entity';
import { Register } from 'src/register/entities/register.entity';
import { Sanitation } from 'src/sanitation/entities/sanitation.entity';
import { Transverse } from 'src/transverse/entities/transverse.entity';
import { VbgProtection } from 'src/vbg-protection/entities/vbg-protection.entity';
import{Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, OneToOne} from 'typeorm'

@Entity('project')

export class Project {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:'date',nullable:true})
    reportDate:Date;

    @Column({type:"varchar",nullable:true})
    reportedMonth:Date;

    @Column({type:"varchar",nullable:true})
    projectName:string;

    @Column({type:"varchar",nullable:true})
    monetaryFound:string;

    @Column({type:"varchar",nullable:true})
    establishmentType:string;

    @Column({type:"varchar",nullable:true})
    establishmentDetails:string;

    @Column({type:"varchar",nullable:true})
    latitude:string;

    @Column({type:"varchar",nullable:true})
    longitude:string;
    
    @Column({type:"varchar",nullable:true})
    disasterResponse:string;

    @Column({type:"varchar",nullable:true})
    sectoralActivity:string;

    @Column({type:"varchar",nullable:true})
    sectorialActivityCode:string;

    @Column({type:"varchar",nullable:true})
    sectorialActivityIndicator:string;

    @Column({type:"int",nullable:true})
    sectorialActivityIndicatorReached:number;

    @Column({type:"varchar",nullable:true})
    directBenef:string;
    
    @Column({type:"varchar",nullable:true})
    achievedUnity:string;
    
    @Column({type:'date',nullable:true})
    startDate:Date;

    @Column({type:'date',nullable:true})
    endDate:Date;

    @Column({type:"varchar",nullable:true})
    projectStatus:string;

    @Column({type:"int",nullable:true})
    indirectBenef:number;

    @Column({type:"varchar",nullable:true})
    recurringBenef:string;

    @Column({type:"varchar",nullable:true})
    majorityGroup:string;

    @Column({type:"int",nullable:true})
    disabledPopulation:number;

    @Column({type:"int",nullable:true})
    nativePopulation:number;

    @Column({type:"int",nullable:true})
    assistedPeople:number;

    @Column({type:"varchar",nullable:true})
    projectUbication:string;

    @Column({type:"varchar",nullable:true})
    comments:string;    

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

    @OneToOne(type => Hosting, hosting=>hosting.project)
    @JoinColumn()
    hosting:Hosting[]; 

    @OneToOne(type => Nutrition, nutrition=>nutrition.project)
    @JoinColumn()
    nutrition:Nutrition[]; 

    @OneToOne(type => Protection, protection=>protection.project)
    @JoinColumn()
    protection:Protection[]; 

    
    @OneToOne(type => Transverse, transverse=>transverse.project)
    @JoinColumn()
    transverse:Transverse[]; 

    @OneToOne(type => ChildProtection, childprotection=>childprotection.project)
    @JoinColumn()
    childprotection:ChildProtection[]; 

    @OneToOne(type => VbgProtection, vgbprotection=>vgbprotection.project)
    @JoinColumn()
    vgbprotection:VbgProtection[]; 
}
