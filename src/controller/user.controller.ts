import { Body, Controller, Get,Req, Post } from '@nestjs/common';
import { CreateAddressDto } from 'src/dto/createAddress.dto';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  createUser(@Body() createUserDto: CreateUserDto){
    let address: CreateAddressDto;
    address = {
      street: 'asd',
      city: 'almaty',
      country: 'kz',
    }
    // return this.userService.createUser(createUserDto, address);
  }

  @Post('address')
  createAddress(@Body() body){
    console.log(body)
    let address: CreateAddressDto;
    address = body.newAddress;
    return this.userService.createAddress(address, body.user)
  }
  
}
