import { Module } from "@nestjs/common";
import { UserModule } from "./user.module";
import { MealPlanController } from "src/controllers/meal-plan.controller";
import { MealPlanService } from "src/services/meal-plan.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MealPlan } from "src/models/Entities/meal-plan.entity";
import { User } from "src/models/Entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([MealPlan, User])
    ],
    controllers: [MealPlanController],
    providers: [MealPlanService],
    exports: [MealPlanService],
})
export class MealPlanModule {}
