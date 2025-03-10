import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/services/auth.service";
import { LocalStrategy } from "src/strategies/local.strategy";
import { AuthController } from "src/controllers/auth.controller";
import { UserModule } from "./user.module";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { JWT } from "src/enums/types";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            global: true,
            secret: "mysecretkey",
            signOptions: {expiresIn: 3600}
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
