import { AssociationTwo } from 'src/association-two/entities/association-two.entity';
import { AssociationOne } from 'src/association_one/entities/association_one.entity';
import { Person } from 'src/persons/person.entity';
import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, OneToMany, JoinColumn, OneToOne, BeforeInsert, ManyToOne} from 'typeorm'
import * as bcrypt from 'bcrypt';
import { Role } from 'src/auth/enums/role.enum';

@Entity('users')

export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    email:string;

    @Column({type:"varchar", nullable: false, select: false })
    password: string;

    @Column({type: 'enum', enum:Role, default: Role.USER})
    role: string;


    @OneToMany(type => AssociationOne, association_one => association_one.users)
    @JoinColumn()
    association_one:AssociationOne[];


    @OneToMany(type => AssociationTwo, associationTwo => associationTwo.users)
    @JoinColumn()
    associationTwo:AssociationTwo[];

  
    @OneToOne(type => Person, persons => persons.users,{eager:true})
    @JoinColumn()
    persons:Person;
  
    @BeforeInsert()
    async hashPassword() {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return await bcrypt.compareSync(password, this.password);
    }

    
}