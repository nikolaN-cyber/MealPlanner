import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class UserRegisterDTO {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @MaxLength(50)
    firstName: string;

    @IsString()
    @MaxLength(50)
    lastName: string;
}

export class UserLoginDTO {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}

export class UserUpdateDTO {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MaxLength(50)
    firstName: string;

    @IsString()
    @MaxLength(50)
    lastName: string;
}