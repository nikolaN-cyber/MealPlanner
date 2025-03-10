import { Controller, Post, Body, Get, Delete, Param, Patch, UseGuards } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { UserRegisterDTO, UserUpdateDTO } from "src/models/DTOs/user.dto";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";

@Controller('users')
export class UserController {
    constructor(private readonly _userService: UserService){}

    @Post('register')
    async register(@Body() user: UserRegisterDTO) {
        return this._userService.registerUser(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-all')
    async getAll() {
        return this._userService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        await this._userService.deleteUser(id)
        return {message: "User deleted successfully"}
    }

    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async edit(@Param('id') id: number, @Body() updateUser: UserUpdateDTO) {
        return this._userService.editUser(id, updateUser)
    }
}