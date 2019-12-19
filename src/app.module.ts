import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { McqModule } from './mcq/mcq.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: 'mysql',
      database: 'mcq_development',
      entities: [UserEntity],
      synchronize: true
    }),
    UserModule,
    McqModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
