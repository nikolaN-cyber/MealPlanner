import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/Entities/user.entity";
import { MealPlan } from "src/models/Entities/meal-plan.entity";
import { MealPlanCreateDTO } from "src/models/DTOs/meal-plan.dto";


@Injectable()
export class MealPlanService {
    constructor(
        @InjectRepository(MealPlan)
        private _mealPlanRepository: Repository<MealPlan>,
        @InjectRepository(User)
        private _userRepository: Repository<User>
    ) { }

    async createMealPlan(userId: number, createMealPlan: MealPlanCreateDTO): Promise<MealPlan> {
        const user = await this._userRepository.findOne({ where: { id: userId } })
        if (!user) {
            throw new NotFoundException("User doesnt exists!")
        }
        const mealPlan = this._mealPlanRepository.create({
            user,
            mealTime: createMealPlan.mealTime,
            time: createMealPlan.time
        })

        return await this._mealPlanRepository.save(mealPlan)
    }

    async editMealPlan(id: number, newMealPlan: MealPlanCreateDTO): Promise<MealPlan> {
        const mealPlan = await this._mealPlanRepository.findOneBy({ id: id })
        if (!mealPlan) {
            throw new NotFoundException()
        }
        mealPlan.mealTime = newMealPlan.mealTime;
        mealPlan.time = newMealPlan.time;
        await this._mealPlanRepository.save(mealPlan)
        return mealPlan
    }

    async deleteMealPlan(id: number): Promise<void> {
        const mealPlan = await this._mealPlanRepository.findOne({where: {id: id}})
        if (!mealPlan){
            throw new NotFoundException()
        }
        await this._mealPlanRepository.remove(mealPlan)
    }
}