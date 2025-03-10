import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { MealPlan } from "./meal-plan.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    firstName: string;

    @Column({ type: 'varchar', length: 50 })
    lastName: string;

    @Column({type: 'varchar', nullable: true})
    dietGoal: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => MealPlan, (mealPlan) => mealPlan.user )
    mealPlans: MealPlan[];
}