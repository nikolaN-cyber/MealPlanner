import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { User } from "src/models/Entities/user.entity";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private _userService: UserService)
        {super({usernameField: 'email'})}
    
    async validate(email: string, password: string) : Promise<User> {
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
}