import { Global, Module } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import { ConfigModule } from "@nestjs/config";
import * as winston from "winston";
import { PrismaService } from "./prisma.service";
import { ValidationService } from "./validation.service";

@Global()
@Module({
    imports: [
        WinstonModule.forRoot({
            transports: [new winston.transports.Console()],
            format: winston.format.json(),
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        })
    ],
    providers: [PrismaService, ValidationService],
    exports: [PrismaService, ValidationService]
})

export class CommonModule { }