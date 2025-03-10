import { Controller, Body, Post, Param, UseGuards, Patch, Delete } from "@nestjs/common";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { MealPlanCreateDTO } from "src/models/DTOs/meal-plan.dto";
import { MealPlanService } from "src/services/meal-plan.service";

@Controller('meal-plans')
export class MealPlanController {
    constructor(private _mealPlanService: MealPlanService){}

    @UseGuards(JwtAuthGuard)
    @Post('create/:id')
    async createMealPlan(@Param('id') id: number, @Body() createMealPlan: MealPlanCreateDTO) {
        return this._mealPlanService.createMealPlan(id, createMealPlan)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async editMealPlan(@Param('id') id: number, @Body() updateMealPlan: MealPlanCreateDTO){
        return this._mealPlanService.editMealPlan(id, updateMealPlan)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async deleteMealPlan(@Param('id') id:number) {
        this._mealPlanService.deleteMealPlan(id)
    }
}