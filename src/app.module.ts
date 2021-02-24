import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './core/database/database.module';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { AdminController } from './modules/admin/admin.controller';
import { AdminModule } from './modules/admin/admin.module';
import { MoviesController } from './modules/movies/movies.controller';
import { MoviesService } from './modules/movies/movies.service';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //make the .env properties available throughout the application
    DatabaseModule,
    AdminModule,
    MoviesModule,
  ],
  controllers: [
    AppController,
    UsersController,
    MoviesController,
    AdminController,
  ],
  providers: [AppService, MoviesService, UsersService],
})
export class AppModule {}
