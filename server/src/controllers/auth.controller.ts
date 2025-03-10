import { Controller, Post, Body } from "@nestjs/common";
import { LocalAuthGuard } from "src/guards/local-auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthService } from "src/services/auth.service";
import { UserLoginDTO } from "src/models/DTOs/user.dto";

@Controller('auth')
export class AuthController {
    constructor(private _authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginDto: UserLoginDTO) : Promise<{access_token}> {
        return this._authService.login(loginDto)
    }
}