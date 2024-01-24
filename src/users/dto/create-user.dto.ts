import { IsString} from "class-validator"

export class createUserDto{

    @IsString()
    readonly email:string;

    @IsString()
    readonly password:string;


}