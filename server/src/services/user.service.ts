import { User } from "src/models/Entities/user.entity";
import { UserRegisterDTO } from "src/models/DTOs/user.dto";
import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { UserUpdateDTO } from "src/models/DTOs/user.dto";
import { MealPlan } from "src/models/Entities/meal-plan.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private _userRepository: Repository<User>,
        @InjectRepository(MealPlan)
        private _mealPlanRepository: Repository<MealPlan>
    ) { }

    async registerUser(user: UserRegisterDTO): Promise<User> {
        const existingUser = await this._userRepository.findOne({ where: { email: user.email } })
        if (existingUser) {
            throw new ConflictException()
        }
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = this._userRepository.create({
            email: user.email,
            password: hashedPassword,
            firstName: user.firstName,
            lastName: user.lastName,
        });
        await this._userRepository.save(newUser)
        return newUser;
    }

    async getAllUsers(): Promise<User[]> {
        return await this._userRepository.find()
    }

    async deleteUser(id: number): Promise<void> {

        const user = await this._userRepository.findOneBy({ id: id })
        if (!user) {
            throw new NotFoundException()
        }
        await this._mealPlanRepository.delete({ user: user });
        await this._userRepository.remove(user)

    }

    async editUser(id: number, updateDto: UserUpdateDTO): Promise<User> {
        const user = await this._userRepository.findOneBy({ id })
        if (!user) {
            throw new NotFoundException()
        }
        user.email = updateDto.email
        user.firstName = updateDto.firstName
        user.lastName = updateDto.lastName
        await this._userRepository.save(user)
        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this._userRepository.findOne({ where: { email: email } })
        if (!user) {
            throw new NotFoundException()
        }
        return user
    }

    async comparePasswords(password: string, confirmPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, confirmPassword)
    }

    async findOneById(id: number): Promise<User> {
        const user = await this._userRepository.findOneBy({ id: id })
        if (!user) {
            throw new NotFoundException()
        }
        return user
    }
}