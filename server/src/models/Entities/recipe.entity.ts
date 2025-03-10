import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MealPlan } from "./meal-plan.entity";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column('text')
    ingredients: string;

    @Column('text')
    instructions: string;

    @Column('jsonb')
    nutrition: { 
        calories: number; 
        proteins: number; 
        fats: number; 
        carbohydrates: number; 
    };

    @ManyToOne(()=>MealPlan, (mealPlan) => mealPlan.recipes)
    mealPlan: MealPlan;
}