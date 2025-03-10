import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class MealPlanCreateDTO {
    @IsString()
    @IsNotEmpty()
    mealTime: string;

    @IsDate() 
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    time: Date;
}
