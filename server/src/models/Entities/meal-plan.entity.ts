import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Recipe } from "./recipe.entity";

@Entity()
export class MealPlan {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User, (user) => user.mealPlans)
    user: User;

    @Column({type: 'varchar'})
    mealTime: string;

    @Column('timestamp')
    time: Date;

    @OneToMany(() => Recipe, (recipe) => recipe.mealPlan)
    recipes: Recipe[]
}