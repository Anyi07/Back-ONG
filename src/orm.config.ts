import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export const config: TypeOrmModuleOptions = {

    type: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE,
    synchronize: process.env.SYNCHRONIZE === 'true',
    entities: ['dist/**/*.entity{.ts,.js}'],
}




