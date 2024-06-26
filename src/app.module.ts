import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    MongooseModule.forRoot(
      `${process.env.MONGODBURI}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.excpgni.mongodb.net/${process.env.MONGODB}
