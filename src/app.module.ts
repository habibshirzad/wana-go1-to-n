import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { DatabaseModule } from './module/database/database.module';
import * as Joi from '@hapi/joi'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
      
    }),
    DatabaseModule,
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
