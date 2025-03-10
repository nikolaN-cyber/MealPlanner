import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/models/Entities/user.entity";
import { UserLoginDTO } from "src/models/DTOs/user.dto";
import * as bcrypt from 'bcrypt';
import { ConfigService } from "@nestjs/config";
import { JWT } from "src/enums/types";

@Injectable()
export class AuthService {
    constructor(
        private _userService: UserService,
        private _jwtService: JwtService,
        private _configService: ConfigService
    ) {}

    async validateUser(email: string, password: string) : Promise<User> {
        const user = await this._userService.findByEmail(email)
        if (!user){
            throw new UnauthorizedException("Invalid email or password")
        }
        const isPasswordValid = await this._userService.comparePasswords(password, user.password)
        if (!isPasswordValid){
            throw new UnauthorizedException("Invalid email or password")
        }
        return user
    }

    async login(loginDTO: UserLoginDTO) : Promise<{access_token: string}> {
        const {email, password} = loginDTO
        const user = await this.validateUser(email, password)
        if (!user){
            throw new UnauthorizedException("Invalid email or password")
        }
        const payload = {sub: user.id, email: user.email}
        return {
            access_token: await this._jwtService.signAsync(payload)
        }
    }

}