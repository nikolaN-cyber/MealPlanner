import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/Entities/user.entity';
import { Recipe } from './models/Entities/recipe.entity';
import { MealPlan } from './models/Entities/meal-plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MealPlanModule } from './modules/meal-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'Nikola24',
      database: 'MealPlanner',
      entities: [User, MealPlan, Recipe],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    MealPlanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
