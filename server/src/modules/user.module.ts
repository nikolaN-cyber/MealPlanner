import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/Entities/user.entity';
import { UserController } from 'src/controllers/user.controller';
import { MealPlan } from 'src/models/Entities/meal-plan.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, MealPlan]),
  ],
  controllers: [UserController],
  providers: [UserService], 
  exports: [UserService],
})
export class UserModule {}
