import { Module } from '@nestjs/common';
import { Address } from 'src/entities/address.entity';
import { User } from 'src/entities/user.entity';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
