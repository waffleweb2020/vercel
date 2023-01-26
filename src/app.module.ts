import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'https://vercel-sooty-tau.vercel.app',
      port: 5432,
      username: 'postgres',
      password: 'qwerty',
      database: 'test',
      models: [],
    }), PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
