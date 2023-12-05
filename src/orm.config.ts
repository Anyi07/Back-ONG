import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {

    type:'postgres',
    username:'postgres',
    password:'1234',
    port:5432,
    host:'localhost',
    database:'ong',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],

}




